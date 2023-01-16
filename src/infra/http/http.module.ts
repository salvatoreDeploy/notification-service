import { Module } from '@nestjs/common';
import { SendNotificationUseCase } from '@app/useCases/sendNotificationUseCase';
import { NotificationController } from '@infra/controller/notification.controller';
import { DatabaseModule } from '@infra/database/database.module';
import { CancelNotificationUseCase } from '@app/useCases/cancelNotificationUseCase';
import { CountRecipientNotificationUseCase } from '@app/useCases/countRecipientNotificationUseCase';
import { ListRecipientNotificationUseCase } from '@app/useCases/listRecipentNotificationUseCase';
import { ReadNotificationUseCase } from '@app/useCases/readNotificationUseCase';
import { UnReadNotificationUseCase } from '@app/useCases/unReadNotificationUseCase';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationController],
  providers: [
    SendNotificationUseCase,
    CancelNotificationUseCase,
    CountRecipientNotificationUseCase,
    ListRecipientNotificationUseCase,
    ReadNotificationUseCase,
    UnReadNotificationUseCase,
  ],
})
export class HttpModule {}
