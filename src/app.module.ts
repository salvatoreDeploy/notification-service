import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseModule } from './database/database.module';
import { HttpModule } from './http/http.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [DatabaseModule, HttpModule],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
