import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import userRepository from './repositories/user.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  async findOne(email: string): Promise<any> {
    return userRepository.findBy({ email });
  }

  async signUp(req: any) {
    const saltRound = 10; // 사용자 요구사항에 맞게 값 정의 가능
    const salt = await bcrypt.genSalt(saltRound); // salt 생성
    const hash = await bcrypt.hash(req.password, salt);
    const usr = new User();
    usr.email = req.email;
    usr.name = req.name;
    usr.password = hash;
    return usr.save();
  }
}
