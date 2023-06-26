import {
  Controller,
  Get,
  Post,
  Request,
  Res,
  Session,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';

@Controller('/user')
export class UserController {
  constructor(private authservice: AuthService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getProfile(@Request() req) {
    return req.user;
  }

  @Post('/sign-up')
  async signUp(@Request() req) {
    return await this.authservice.signUp(req.body);
  }

  @UseGuards(AuthGuard('local'))
  @Post()
  async login(
    @Session() session,
    @Request() req,
    @Res({ passthrough: true }) response,
  ): Promise<any> {
    const access_token = await (
      await this.authservice.login(req.user)
    ).access_token;
    return { access_token };
  }
}
