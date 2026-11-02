import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { resolve } from 'path';
import { DbModule } from './db/db.module';
import { AuthModule } from './auth/auth.module';
import { LeadsModule } from './leads/leads.module';
import { HealthController } from './health.controller';

@Module({
  imports: [
    ...(process.env.SERVE_STATIC === 'false' ? [] : [ServeStaticModule.forRoot({
      rootPath: resolve(process.cwd(), process.env.LANDING_DIR || '../landing'),
      exclude: ['/api/(.*)'],
      serveStaticOptions: { extensions: ['html'], setHeaders: (res) => res.setHeader('Cache-Control', 'no-store') },
    })]),
    DbModule,
    AuthModule,
    LeadsModule,
  ],
  controllers: [HealthController],
})
export class AppModule {}
