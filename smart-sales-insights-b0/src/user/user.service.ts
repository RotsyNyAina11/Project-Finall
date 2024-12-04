import { Injectable } from '@nestjs/common';
import { UserInterface } from './type/UserInterface';
import { InjectRepository } from '@nestjs/typeorm';
import {UserApp} from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserApp) private userRepository: Repository<UserApp>
    ){}

    findAll(): Promise<UserInterface[]> {
        return this.userRepository.find()
    }

    findOne(id: number): Promise<UserInterface> {
        return this.userRepository.findOneBy({ id }) 
    }

    create(product: Omit<UserInterface, 'id'>): Promise<UserInterface> {
        const data = this.userRepository.create(product)
        return this.userRepository.save(data)
    }

    async update(id: number, product: Partial<UserInterface>): Promise<UserInterface> {
        await this.userRepository.update(id, product);
        const updatedProduct = await this.userRepository.findOneBy({ id });
        return updatedProduct
    }

    async delete(id: number): Promise<UserInterface[]> {
        await this.userRepository.delete(id)
        return this.userRepository.find()
    }
}
