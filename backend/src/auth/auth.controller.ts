import {Body, ConflictException, Controller, Get, HttpCode, HttpStatus, Post, UseGuards} from '@nestjs/common';
import {UsersService} from "../users/users.service";
import {AuthGuard} from "@nestjs/passport";
import {CreateUserDto} from "../common/dto/createUser.dto";
import {AuthService} from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private usersService: UsersService, private readonly authService: AuthService) {}

    @Post('/register')
    async register(@Body() createUserDto: CreateUserDto ) {

        const existingUser = await this.usersService.findOne(createUserDto.username);
        const existingEmail = await this.usersService.findByEmail(createUserDto.email);
        if (existingEmail) {
            throw new ConflictException(`User with email ${createUserDto.email} already exists`);
        }
        if (existingUser) {
            throw new ConflictException(`User with username ${createUserDto.username} already exists`);
        }
        return this.authService.register(createUserDto);
    }

    @HttpCode(HttpStatus.OK)
    @UseGuards(AuthGuard)
    @Post('/login')
    async login(@Body() body: { email: string; password: string }) {
        const { email, password } = body;
        const user = await this.usersService.findByEmail(email);
        if (!user) {
            throw new ConflictException('Invalid credentials');
        }

        const isPasswordValid = await this.authService.comparePasswords(password, user.password);
        if (!isPasswordValid) {
            throw new ConflictException('Invalid credentials');
        }

        return this.authService.login(user); // jwt token should be returned here
    }

    @Get('/auth/profile')
    @UseGuards(AuthGuard)
    async getProfile(@Body() body: { userId: string}) {
        const { userId } = body;
        const user = await this.usersService.findOne(userId);
        if (!user) {
            throw new ConflictException('User not found');
        }
        return user;
    }
}
