import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { AdminGuard } from 'src/admin/admin.guard';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: '123', // Utilisez un secret sécurisé en prod
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService, AdminGuard],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
