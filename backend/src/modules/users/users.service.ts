import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}
  async create(data: CreateUserDto) {
    const findUser = await this.usersRepository.findByEmail(data.email);

    if (findUser) {
      throw new ConflictException('email already exists');
    }

    const user = await this.usersRepository.create(data);
    return user;
  }

  async findAll() {
    return this.usersRepository.findAll();
  }

  async findOne(id: string) {
    const findUser = await this.usersRepository.findOne(id);

    if (!findUser) {
      throw new NotFoundException('User Not found');
    }

    return findUser;
  }

  async findByEmail(email: string) {
    const findUser = await this.usersRepository.findByEmail(email);

    return findUser;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const findUser = await this.usersRepository.findOne(id);

    if (!findUser) {
      throw new NotFoundException('User Not found');
    }

    return this.usersRepository.update(id, updateUserDto);
  }

  async remove(id: string) {
    const findUser = await this.usersRepository.findOne(id);

    if (!findUser) {
      throw new NotFoundException('User Not found');
    }

    return this.usersRepository.delete(id);
  }
}
