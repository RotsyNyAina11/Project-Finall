// src/auth/auth.controller.ts
import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { email: string; password: string }){
    const { email, password } = body;

    if(!email || !password){
        throw new BadRequestException('Email and password required');
    }

    if(!this.isValidateEmail(email)){
        throw new BadRequestException('Invalid email format');
    }

    return this.authService.login(email, password);
    
  }

  @Post('signup')
  async signup(@Body() body: { email: string; password: string }) {
    const { email, password } = body;

    if(!email || !password ){
        throw new BadRequestException('Email and Password required ');
    }

    if(!this.isValidateEmail(email)) {
        throw new BadRequestException('Invalid Email format');
    }

    if(password.length < 6){
        throw new BadRequestException('Password must be at least 6 characters long');
    }

    return this.authService.signup(email, password);
  }

  private isValidateEmail(email: string ) : boolean {
    const emailRegex = /^[^\s@]+[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
