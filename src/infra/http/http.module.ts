import { Module } from '@nestjs/common';
import { SendNotificationUseCase } from '@app/useCases/sendNotificationUseCase';
import { NotificationController } from '@infra/controller/notification.controller';
import { DatabaseModule } from '@infra/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationController],
  providers: [SendNotificationUseCase],
})
export class HttpModule {}
