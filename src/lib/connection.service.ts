// src/common/pg-connection.service.ts
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { Client } from 'pg';

@Injectable()
export class PgConnectionService implements OnModuleInit, OnModuleDestroy {
  private client: Client;

  constructor() {
    this.client = new Client({
      host: 'localhost',
      port: 5432,
      user: 'postgres',
      password: '1234',
      database: 'database',
    });
  }

  async onModuleInit() {
    await this.client.connect();
    console.log('PostgreSQL 연결 성공');
  }

  async onModuleDestroy() {
    await this.client.end();
  }

  getClient(): Client {
    return this.client;
  }
}