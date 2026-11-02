import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { DbService } from '../db/db.service';
import { LoginDto, RegisterDto } from './auth.dto';

@Injectable()
export class AuthService {
  constructor(private readonly db: DbService, private readonly jwt: JwtService) {}

  private token(u: { id: number; email: string; role: string }) {
    return this.jwt.signAsync({ sub: u.id, email: u.email, role: u.role });
  }

  async register(dto: RegisterDto) {
    const email = dto.email.toLowerCase();
    const hash = await bcrypt.hash(dto.password, 10);
    try {
      const { rows } = await this.db.query(
        `INSERT INTO users (name, email, password_hash) VALUES ($1,$2,$3)
         RETURNING id, name, email, role`,
        [dto.name.trim(), email, hash],
      );
      return { accessToken: await this.token(rows[0]), user: rows[0] };
    } catch (e: any) {
      if (e.code === '23505') throw new ConflictException('E-mail já cadastrado');
      throw e;
    }
  }

  async login(dto: LoginDto) {
    const { rows } = await this.db.query(
      'SELECT id, name, email, role, password_hash FROM users WHERE email = $1',
      [dto.email.toLowerCase()],
    );
    const u = rows[0];
    if (!u || !(await bcrypt.compare(dto.password, u.password_hash))) {
      throw new UnauthorizedException('E-mail ou senha inválidos');
    }
    const { password_hash, ...user } = u;
    return { accessToken: await this.token(user), user };
  }

  async me(id: number) {
    const { rows } = await this.db.query(
      'SELECT id, name, email, role, created_at FROM users WHERE id = $1',
      [id],
    );
    return rows[0];
  }
}
