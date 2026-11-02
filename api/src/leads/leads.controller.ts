import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { IsEmail, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';
import { DbService } from '../db/db.service';
import { AdminGuard } from '../auth/jwt.guard';

class CreateLeadDto {
  @IsString() @MinLength(2) @MaxLength(80) name: string;
  @IsString() @MinLength(8) @MaxLength(25) phone: string;
  @IsOptional() @IsEmail() email?: string;
  @IsOptional() @IsString() @MaxLength(80) interest?: string;
  @IsOptional() @IsString() @MaxLength(40) unit?: string;
}

@Controller('leads')
export class LeadsController {
  constructor(private readonly db: DbService) {}

  @Post()
  async create(@Body() d: CreateLeadDto) {
    const { rows } = await this.db.query(
      `INSERT INTO leads (name, phone, email, interest, unit) VALUES ($1,$2,$3,$4,$5)
       RETURNING id, created_at`,
      [d.name.trim(), d.phone.trim(), d.email ?? null, d.interest ?? null, d.unit ?? null],
    );
    return { ok: true, ...rows[0] };
  }

  @Get()
  @UseGuards(AdminGuard)
  async list() {
    const { rows } = await this.db.query('SELECT * FROM leads ORDER BY created_at DESC LIMIT 200');
    return rows;
  }
}
