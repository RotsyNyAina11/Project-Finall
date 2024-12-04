import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserApp } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserApp])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
