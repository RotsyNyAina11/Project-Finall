import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import * as dotenv from 'dotenv';
//import { User } from './auth/entities/user.entity';
import { ProductModule } from './product/product.module';
import { Product } from './product/entities/product.entity';
import { UserModule } from './user/user.module';
import { UserApp } from './user/entities/user.entity';
import { HistoryModule } from './history/history.module';
import { User } from './auth/entities/user.entity';
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host:  'localhost',
      port: 5432,
      username: 'postgres',
      password: 'lengla',
      database: 'Projectfinal',
      entities: [UserApp, Product, User],
      synchronize: true,
    }),
    AuthModule,
    ProductModule,
    UserModule,
    HistoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
