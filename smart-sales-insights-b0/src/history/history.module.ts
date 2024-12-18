import { Module } from '@nestjs/common';
import { HistoryController } from './history.controller';
import { HistoryService } from './history.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { History } from './entities/history.entity';

@Module({
  imports: [TypeOrmModule.forFeature([History])],
  controllers: [HistoryController],
  providers: [HistoryService]
})
export class HistoryModule {}
