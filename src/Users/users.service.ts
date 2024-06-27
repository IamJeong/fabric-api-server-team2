// users.service.ts 파일에 추가
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(userid: string, username: string, password: string, phone: number, mail: string): Promise<User> {
    const user = this.usersRepository.create({ userid, username, password, phone, mail });
    return this.usersRepository.save(user);
  }

  async findByUsername(username: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { username } });
  }

  async validateUser(username: string, password: string): Promise<boolean> {
    const user = await this.findByUsername(username);
    if (user && user.password === password) {
      return true;
    }
    return false;
  }
}
