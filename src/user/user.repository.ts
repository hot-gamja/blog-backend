import { Injectable } from '@nestjs/common';
import { PgConnectionService } from '../lib/connection.service';
import { User } from './user.entity';

@Injectable()
export class UserRepository {
    constructor(private readonly pg: PgConnectionService) { }

    async findAll(): Promise<User[]> {
        const result = await this.pg.getClient().query('SELECT id, name FROM users');
        return result.rows.map(row => new User(row.id, row.name));
    }

    async findById(id: number): Promise<User | undefined> {
        const result = await this.pg.getClient().query('SELECT id, name FROM users WHERE id = $1', [id]);
        const row = result.rows[0];
        return row ? new User(row.id, row.name) : undefined;
    }

    async create(name: string): Promise<User> {
        const result = await this.pg.getClient().query(
            'INSERT INTO users (name) VALUES ($1) RETURNING id, name',
            [name],
        );
        const row = result.rows[0];
        return new User(row.id, row.name);
    }
}