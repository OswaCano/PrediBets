import React from 'react';
import { FaRobot } from 'react-icons/fa';

export default function ChatbotUI() {
    return (
        <div className="w-screen h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-red-900 text-white flex flex-col">
            {/* Top Buttons */}
            <div className="flex justify-between items-center px-4 py-3">
                <button className="bg-black px-4 py-1 rounded-full text-white text-sm font-semibold">Cancel</button>
                <button className="bg-black px-4 py-1 rounded-full text-white text-sm font-semibold">Info</button>
            </div>

            {/* Logo and Greeting */}
            <div className="flex flex-col items-center space-y-2 mt-6 px-4 text-center">
                <div className="bg-black p-3 rounded-full">
                    <div className="w-6 h-6 bg-white text-black text-center font-bold text-sm rounded">U</div>
                </div>
                <h1 className="text-2xl font-bold">Hello, Oswaldo.<br/>We're here to help.</h1>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-4 space-y-4 mt-6 overflow-y-auto">
                {/* User Message */}
                <div className="flex justify-end">
                    <div className="bg-red-600 text-white px-4 py-3 rounded-2xl max-w-[80%] md:max-w-md text-sm">
                        What's going to be the result for Barcelona vs Madrid tomorrow?
                    </div>
                </div>

                {/* AI Response */}
                <div className="flex items-start space-x-2">
                    <div className="bg-red-600 text-white p-2 rounded-full shrink-0">
                        <FaRobot size={16}/>
                    </div>
                    <div className="bg-black bg-opacity-60 px-4 py-3 rounded-2xl max-w-[85%] md:max-w-lg text-sm">
                        <p className="mb-2">
                            Hi Oswaldo. According to the latest data, the match between Barcelona and Madrid is expected
                            to be very competitive. Barcelona has a slight edge with a 55% chance of winning, while
                            Madrid stands at 30%. The remaining 15% accounts for a draw. However, these probabilities
                            can change based on team form and injuries.
                        </p>

                    </div>
                </div>
            </div>

            {/* Input Field */}
            <div className="p-4 bg-zinc-900">
                <input
                    type="text"
                    placeholder="Reply to Fin..."
                    className="w-full px-4 py-2 rounded-full bg-zinc-800 text-white placeholder-gray-400 focus:outline-none text-sm"
                />
            </div>
        </div>
    );
}
