import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service'; 
import { LocalAuthGuard } from 'src/auth/passport/local-auth.guard';
import { Public } from 'src/decorator/customize';
import { CreateAuthDto } from 'src/auth/dto/create-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @Public()
  @UseGuards(LocalAuthGuard)
   handlelogin(@Request() req) {
    return this.authService.login(req.user);
  }

  // @UseGuards(JwtAuthGuard)
  @Post('register')
  @Public()
  register(@Body() registerDto : CreateAuthDto) {
    return this.authService.handleRegister(registerDto);
  }
}
