import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import userRepository from './repositories/user.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  async findOne(username: string): Promise<any> {
    return userRepository.findBy({ username });
  }

  async signUp(req: any) {
    const saltRound = 10; // 사용자 요구사항에 맞게 값 정의 가능
    const salt = await bcrypt.genSalt(saltRound); // salt 생성
    const hash = await bcrypt.hash(req.password, salt);
    const usr = new User();
    usr.username = req.username;
    usr.password = hash;
    usr.isActive = true;
    return usr.save();
  }

  async findUser(userId: string): Promise<any> {
    return { userId: 1, username: 'test', password: '123' };
  }
}
