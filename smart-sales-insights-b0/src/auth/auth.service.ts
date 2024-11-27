import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  private readonly users = [
    { email: 'test@gmail.com', password: '$2b$10$CxwL16ik5g5hsMzU2EOhN.Y5KpAKKwALu46JpH4l8u4fuB6GVhu1G' }, // hash de 'password123'
  ];

  async login(email: string, password: string): Promise<{ message: string }> {
    const user = this.users.find((user) => user.email === email);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return { message: 'Login successful' };
  }

  async signup(email: string, password: string): Promise<{ message: string }> {
    const existingUser = this.users.find((user) => user.email === email);
    if (existingUser) {
      throw new BadRequestException('Email is already taken');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    this.users.push({ email, password: hashedPassword });
    return { message: 'Signup successful' };
  }
}
