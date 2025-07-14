import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/modules/users/schemas/user.schema';
import { Model } from 'mongoose';
import { hashPasswordHelper } from 'src/helpers/util';
import mongoose from 'mongoose';
import aqp from 'api-query-params';
import { CreateAuthDto } from 'src/auth/dto/create-auth.dto';
import { v4 as uuidv4 } from 'uuid';
import * as dayjs from 'dayjs'; 
import { MailerService } from '@nestjs-modules/mailer';
@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
     private readonly mailerService: MailerService,
  ) {}

  isEmailExits = async (email: string) => {
    const user = await this.userModel.exists({ email });
    if (user) return true;
    return false;
  };

  async create(createUserDto: CreateUserDto) {
    const { username, password, email, full_name, phone } = createUserDto;
    //check email
    const isExits = await this.isEmailExits(email);
    if (isExits === true) {
      throw new BadRequestException(
        `Email đã tồn tại : ${email} . Vui lòng nhập email khác `,
      );
    }
    const hashPassword = await hashPasswordHelper(password);
    const user = await this.userModel.create({
      username,
      password: hashPassword,
      email,
      full_name,
      phone,
    });
    return {
      _id: user._id,
    };
  }

  async findAll(query: string, current: number, pageSize: number) {
    const { filter, sort } = aqp(query);
    if (filter.current) delete filter.current;
    if (filter.pageSize) delete filter.pageSize;

    if (!current) current = 1;
    if (!pageSize) current = 10;

    const totalItems = (await this.userModel.find(filter)).length;
    const totalPages = Math.ceil(totalItems / pageSize);
    const skip = (current - 1) * pageSize;

    const result = await this.userModel
      .find(filter)
      .limit(pageSize)
      .skip(skip)
      .sort(sort as any);
    return { result, totalPages };
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async findByEmail(email: string) {
    return await this.userModel.findOne({ email });
  }

  async update(updateUserDto: UpdateUserDto) {
    return await this.userModel.updateOne(
      { _id: updateUserDto._id },
      { ...updateUserDto },
    );
  }

  async remove(_id: string) {
    if (mongoose.isValidObjectId(_id)) {
      return this.userModel.deleteOne({ _id });
    } else {
      throw new BadRequestException('Id Valid MongoDB');
    }
    return `This action removes a #${_id} user`;
  }
  async handleRegister(registerDto: CreateAuthDto) {
    const { full_name, username, password, email } = registerDto;

    const isEmailExists = await this.isEmailExits(email);
    if (isEmailExists) {
      throw new BadRequestException(
        `Email đã tồn tại: ${email}. Vui lòng nhập email khác.`,
      );
    }

    const hashedPassword = await hashPasswordHelper(password);
   const codeID = uuidv4()
    const user = await this.userModel.create({
      full_name,
      username,
      email,
      password: hashedPassword,
      isActive : false,
      codeID: codeID,
      codeExpired : dayjs().add(5,'minutes'),
    });
    //send mail
    await this.mailerService.sendMail({
        to: user.email, // list of receivers
        subject: 'Activate your account at @tuandanny ✔', // Subject line
        template: "register",
        context: { 
        name : user?.username ?? user?.email,
          activationCode:codeID
        }
    })
    //trả về phản hồi
    return {
      _id: user._id,
    };
  }
}
