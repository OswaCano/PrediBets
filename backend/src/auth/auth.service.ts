import { Injectable } from '@nestjs/common';
import axios from 'axios';
import {UsersService} from "../users/users.service";
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from 'bcrypt';
import {User} from "../schemas/user.schema";

@Injectable()
export class AuthService {

    constructor(
       private usersService: UsersService,
       private jwtService: JwtService
    ) {}

    async login(user: User) {
        const payload = { username: user.username, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
            user,
        };
    }

    async register(userData: any) {
        const hashedPassword = await this.hashPassword(userData.password);
        const newUser = await this.usersService.create({
            ...userData,
            password: hashedPassword,
        });
        return this.login(newUser);
    }

    /*
    async validateUser(payload: any)  {
        const user = await this.usersService.findByEmail(payload);
        if (user && await bcrypt.compare(pass, user.password)) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
     */

    async hashPassword(password: string): Promise<string> {
        const saltRounds = 10;
        return await bcrypt.hash(password, saltRounds);
    }

    async comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
        return await bcrypt.compare(password, hashedPassword);
    }
}
