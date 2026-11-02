import { Injectable, Logger, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { Pool, QueryResultRow } from 'pg';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class DbService implements OnModuleInit, OnModuleDestroy {
  private readonly log = new Logger('Db');
  private pool = new Pool({
    connectionString: process.env.DATABASE_URL || 'postgresql://sharon:sharon_dev@localhost:5433/sharon',
    max: 8,
  });

  query<T extends QueryResultRow = any>(text: string, params?: any[]) {
    return this.pool.query<T>(text, params);
  }

  async onModuleInit() {
    await this.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password_hash TEXT NOT NULL,
        role TEXT NOT NULL DEFAULT 'user',
        created_at TIMESTAMPTZ NOT NULL DEFAULT now()
      );
      CREATE TABLE IF NOT EXISTS leads (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        phone TEXT NOT NULL,
        email TEXT,
        interest TEXT,
        unit TEXT,
        created_at TIMESTAMPTZ NOT NULL DEFAULT now()
      );
    `);
    const { ADMIN_EMAIL, ADMIN_PASSWORD } = process.env;
    if (ADMIN_EMAIL && ADMIN_PASSWORD) {
      const hash = await bcrypt.hash(ADMIN_PASSWORD, 10);
      await this.query(
        `INSERT INTO users (name, email, password_hash, role) VALUES ('Admin', $1, $2, 'admin')
         ON CONFLICT (email) DO NOTHING`,
        [ADMIN_EMAIL.toLowerCase(), hash],
      );
    }
    this.log.log('Banco pronto (users, leads)');
  }

  onModuleDestroy() {
    return this.pool.end();
  }
}
