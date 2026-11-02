import { Module } from '@nestjs/common';
import { LeadsController } from './leads.controller';
import { AdminGuard } from '../auth/jwt.guard';

@Module({ controllers: [LeadsController], providers: [AdminGuard] })
export class LeadsModule {}
