import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
    constructor(private readonly userRepo: UserRepository) { }

    getUsers(): Promise<User[]> {
        return this.userRepo.findAll();
    }

    getUser(id: number): Promise<User | undefined> {
        return this.userRepo.findById(id);
    }

    createUser(name: string): Promise<User> {
        return this.userRepo.create(name);
    }
}
