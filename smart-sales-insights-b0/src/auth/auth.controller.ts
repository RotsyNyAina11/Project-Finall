import { Controller, Post, Body, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  
  @Post('signup')
  async signup(
      @Body('email') email: string,
      @Body('password') password: string,
  ) {
      try {
          return await this.authService.signup(email, password);
      } catch (error) {
          console.error('Signup error:', error.message); 
          throw new BadRequestException(error.message);
      }
  }


  @Post('login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    try {
      const token = await this.authService.login(email, password);
      return { access_token: token };
    } catch (error) {
      throw new UnauthorizedException('Invalid credentials');
    }
  }
}
