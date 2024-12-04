import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { HistoryInterface } from './type/HistoryInterface';
import { HistoryService } from './history.service';

@Controller('history')
export class HistoryController {

    constructor(private historyService :  HistoryService){}

    @Get()
    findAll(): Promise<HistoryInterface[]> {
        return this.historyService.findAll()  
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<HistoryInterface>{
        return this.historyService.findOne(+id);
    }

    @Post()
    create(@Body() history: Omit<HistoryInterface, 'id'>): Promise<HistoryInterface>{
        return this.historyService.create(history);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() history: Partial<HistoryInterface>){
        return this.historyService.update(+id, history)
    }

    @Delete(':id')
    delete(@Param('id') id: string) : Promise<HistoryInterface[]> {
        return this.historyService.delete(+id)
    }
}
