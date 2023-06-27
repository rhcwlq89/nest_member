import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const saltRound = 10; // 사용자 요구사항에 맞게 값 정의 가능
    const salt = await bcrypt.genSalt(saltRound); // salt 생성
    const user = await this.userService.findOne(username);
    const hash = await bcrypt.hash(password, salt);
    if (!user || (user && !compare(password, hash))) return null;
    console.log(user);
    return await this.userService.findUser(user.id);
  }

  async signUp(req: any) {
    return await this.userService.signUp(req);
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload, {
        secret: `${process.env.JWT_KEY}`,
      }),
    };
  }
}
