import { Module } from '@nestjs/common';
import { SendNotificationUseCase } from 'src/app/useCases/sendNotificationUseCase';
import { NotificationController } from '../controller/notification.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationController],
  providers: [SendNotificationUseCase],
})
export class HttpModule {}
