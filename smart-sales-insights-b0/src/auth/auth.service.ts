import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';
import { BlacklistedToken } from './entities/token.entity';


@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(BlacklistedToken)
    private blacklistedTokenRepository: Repository<BlacklistedToken>,
    private jwtService: JwtService,
  ) {}


  async signup(email: string, password: string, role: string = 'client'): Promise<User> {
    console.log('Checking if email exists: ${email}');
    const existingUser = await this.userRepository.findOne({ where: { email }});
    if(existingUser){
      throw new BadRequestException('Email already in use');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = this.userRepository.create({ email, password: hashedPassword, role });
    return this.userRepository.save(user);
  }

  async login(email: string, password: string): Promise<string> {
    const user = await this.userRepository.findOne({ where: { email } });
    if (user && (await bcrypt.compare(password, user.password))) {
      const payload = { email: user.email, role: user.role };
      return this.jwtService.sign(payload);
    }
    throw new Error('Invalid credentials');
  }

  async logout(token: string): Promise<void> {
    try {
      console.log('Blacklisting token:', token);
      await this.blacklistedTokenRepository.save({ token });
      console.log('Token blacklisted successfully');
    } catch (error) {
      console.error('Error blacklisting token:', error);
      throw new BadRequestException('Failed to blacklist token');
    }
  }

  async isTokenBlacklisted(token: string): Promise<boolean> {
    const blacklistedToken = await this.blacklistedTokenRepository.findOne({ where: { token } });
    return !!blacklistedToken;
  }
} 