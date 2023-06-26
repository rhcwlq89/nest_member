import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  async findOne(username: string): Promise<any> {
    return { username: username, password: '123' };
  }

  async signUp(req: any) {
    const usr = new User();
    usr.username = req.username;
    usr.isActive = true;
    return usr.save();
  }

  async findUser(userId: string): Promise<any> {
    return { userId: 1, username: 'test', password: '123' };
  }
}
