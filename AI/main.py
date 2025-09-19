from fastapi import FastAPI
from pydantic import BaseModel
import joblib

# ------------------------------
# Inicializar la aplicación
# ------------------------------
app = FastAPI()

# ------------------------------
# MODELOS DE DATOS (para requests)
# ------------------------------
class Mensaje(BaseModel):
    texto: str

class Info(BaseModel):
    datos: str

# ------------------------------
# VARIABLES EN MEMORIA (estado temporal)
# ------------------------------
mensaje_guardado = None
info_guardada = None

# ------------------------------
# CARGA DE MODELO (ejemplo con scikit-learn)
# ------------------------------
# Se asume que ya tienes un modelo entrenado y guardado como "modelo.pkl"
# Si no lo tienes, puedes entrenar uno rápido y guardarlo con joblib.dump(...)
try:
    modelo = joblib.load("modelo.pkl")
except:
    modelo = None  # Si no existe, se mantiene en None

# ------------------------------
# RUTA 1: Guardar mensaje inicial
# ------------------------------
@app.post("/mensaje")
def recibir_mensaje(mensaje: Mensaje):
    """
    Recibe un mensaje del usuario y lo guarda en memoria.
    Aquí podrías aplicar algún preprocesamiento con NLP si quisieras.
    """
    global mensaje_guardado
    mensaje_guardado = mensaje.texto
    return {"status": "ok", "mensaje_recibido": mensaje_guardado}

# ------------------------------
# RUTA 2: Procesar información con IA (scikit-learn)
# ------------------------------
@app.post("/informacion")
def procesar_informacion(info: Info):
    """
    Procesa datos usando un modelo de ML (scikit-learn).
    En este ejemplo, simplemente mostramos cómo usar el modelo cargado.
    """
    global info_guardada

    if modelo:
        # Supongamos que el modelo espera vectores numéricos como entrada
        # Aquí deberías transformar `info.datos` en un vector antes de predecir
        # Para el ejemplo, solo lo dejamos como texto simulado
        prediccion = "resultado_modelo"
        info_guardada = f"Modelo predijo: {prediccion}"
    else:
        info_guardada = f"Información recibida sin modelo: {info.datos}"

    return {"status": "ok", "info_procesada": info_guardada}

# ------------------------------
# RUTA 3: Generar respuesta final
# ------------------------------
@app.get("/respuesta")
def generar_respuesta():
    """
    Devuelve una respuesta final basada en el mensaje inicial y la información procesada.
    Aquí podrías usar otra IA para redactar la respuesta natural.
    """
    if not mensaje_guardado or not info_guardada:
        return {"error": "Falta mensaje o información previa"}

    respuesta = (
        f"Mensaje original: '{mensaje_guardado}'. "
        f"Información procesada: '{info_guardada}'. "
        f"Respuesta final generada."
    )

    return {"respuesta": respuesta}
