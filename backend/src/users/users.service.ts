import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from '../common/dto/createUser.dto';
import { UpdateUserDto} from "../common/dto/updateUser.dto";

@Injectable()
export class UsersService {

    constructor(
        @InjectModel('User') private readonly userModel: Model<any>,
    ) {}

    async findAll() {
        return this.userModel.find().exec();
    }

    async findOne(id: string): Promise<any> {
        return this.userModel.findById(id).exec();
    }

    async create(user: CreateUserDto) {
        const newUser = new this.userModel(user);
        await newUser.save();
        return newUser;
    }

    async update(id: string, user: UpdateUserDto) {
        return this.userModel.findByIdAndUpdate(id, user, { new: true }).exec();
    }

    async delete(id: string) {
        return this.userModel.findByIdAndDelete(id).exec();
    }

    async findBySubType(planType: string) {
        return this.userModel.find({ planType }).exec();
    }

}
