import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async findOne(username: string): Promise<any> {
    return { username: username, password: '123' };
  }

  async findUser(userId: string): Promise<any> {
    return { userId: 1, username: 'test', password: '123' };
  }
}
