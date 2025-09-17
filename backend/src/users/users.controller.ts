import {
    Controller,
    Get,
    Post,
    Delete,
    Put,
    Body,
    Param,
    ConflictException,
    NotFoundException,
    HttpCode,
    UseGuards
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from '../common/dto/createUser.dto';
import { UpdateUserDto } from '../common/dto/updateUser.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get()
    async getAllUsers() {
        return this.usersService.findAll();
    }

    @Get(':id')
    async getUserById(@Param('id') id: string) {
        const user = await this.usersService.findOne(id);
        if (!user) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }
        return user;
    }

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto) {

    }

    @Put(':id')
    async updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        const user = await this.usersService.findOne(id);
        if (!user) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }
        return this.usersService.update(id, updateUserDto);
    }

    @Delete(':id')
    @HttpCode(204)
    async deleteUser(@Param('id') id: string) {
        const user = await this.usersService.findOne(id);
        if (!user) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }
        await this.usersService.delete(id);
    }

    @Get('subscription_id/:subscription_id')
    async getUsersBySub_id(@Param('subscription_id') subID: string) {
        const users = await this.usersService.findBySubscriptionId(subID);
        if (!users || users.length === 0) {
            throw new NotFoundException(`No users found with subscription type:  ${subID}`);
        }
        return users;
    }

}
