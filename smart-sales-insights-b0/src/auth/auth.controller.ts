import { Controller, Post, Body, UnauthorizedException, BadRequestException, UseGuards, Logger } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AdminGuard } from 'src/admin/admin.guard';

@Controller('auth')
export class AuthController {
  private readonly logger = new Logger(AuthController.name);
  constructor(private authService: AuthService) {
    this.logger.log('AuthController initialized');
  }

  
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

  @UseGuards(AdminGuard)
  @Post('create-admin')
  async createAdmin(
    @Body('email') email: string,
    @Body('password') password: string,
  ){
    return await this.authService.signup(email, password, 'admin');
  }
}
