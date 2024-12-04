import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserInterface } from './type/UserInterface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private userService :  UserService){}

    @Get()
    findAll(): Promise<UserInterface[]> {
        return this.userService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<UserInterface>{
        return this.userService.findOne(+id);
    }

    @Post()
    create(@Body() user: Omit<UserInterface, 'id'>): Promise<UserInterface>{
        return this.userService.create(user);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() user: Partial<UserInterface>){
        return this.userService.update(+id, user)
    }

    @Delete(':id')
    delete(@Param('id') id: string) : Promise<UserInterface[]> {
        return this.userService.delete(+id)
    }
}
