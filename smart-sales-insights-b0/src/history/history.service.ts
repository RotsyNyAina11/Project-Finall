import { Injectable } from '@nestjs/common';
import { HistoryInterface } from './type/HistoryInterface';
import { InjectRepository } from '@nestjs/typeorm';
import {History} from './entities/history.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HistoryService {
    constructor(
        @InjectRepository(History) private historyRepository: Repository<History>
    ){}

    findAll(): Promise<HistoryInterface[]> {
        return this.historyRepository.find()
    }

    findOne(id: number): Promise<HistoryInterface> {
        return this.historyRepository.findOneBy({ id }) 
    }

    create(history: Omit<HistoryInterface, 'id'>): Promise<HistoryInterface> {
        const data = this.historyRepository.create(history)
        return this.historyRepository.save(data)
    }

    async update(id: number, history: Partial<HistoryInterface>): Promise<HistoryInterface> {
        await this.historyRepository.update(id, history);
        const updatedHistory = await this.historyRepository.findOneBy({ id });
        return updatedHistory
    }

    async delete(id: number): Promise<HistoryInterface[]> {
        await this.historyRepository.delete(id)
        return this.historyRepository.find()
    }
}
