import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { SendNotificationUseCase } from 'src/app/useCases/sendNotificationUseCase';

import { CreateNotificationBody } from '@infra/dtos/createNotificationBody';
import { NotificationViewModel } from '@infra/http/view-models/notificationViewModel';
import { CancelNotificationUseCase } from '@app/useCases/cancelNotificationUseCase';
import { ReadNotificationUseCase } from '@app/useCases/readNotificationUseCase';
import { UnReadNotificationUseCase } from '@app/useCases/unReadNotificationUseCase';
import { CountRecipientNotificationUseCase } from '@app/useCases/countRecipientNotificationUseCase';
import { ListRecipientNotificationUseCase } from '@app/useCases/listRecipentNotificationUseCase';

@Controller('notifications')
export class NotificationController {
  constructor(
    private sendNotification: SendNotificationUseCase,
    private cancelNotification: CancelNotificationUseCase,
    private readNotification: ReadNotificationUseCase,
    private unReadNotification: UnReadNotificationUseCase,
    private countRecipientNotification: CountRecipientNotificationUseCase,
    private listRecipientNotification: ListRecipientNotificationUseCase,
  ) {}

  /* @Get()
  listAllNotifications() {
    return this.prisma.notification.findMany();
  } */

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;

    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category,
    });

    return { notification: NotificationViewModel.toHTTP(notification) };
  }

  @Patch(':id/cancel')
  async cancel(@Param('id') id: string) {
    await this.cancelNotification.execute({ notificationId: id });
  }

  @Get('count/from/:recipientId')
  async countFromRecipient(@Param('recipientId') recipientId: string) {
    const { count } = await this.countRecipientNotification.execute({
      recipientId,
    });

    return { count };
  }

  @Get('list/from/:recipientId')
  async listFromRecipient(@Param('recipientId') recipientId: string) {
    const { notifications } = await this.listRecipientNotification.execute({
      recipientId,
    });

    return { notifications: notifications.map(NotificationViewModel.toHTTP) };
  }

  @Patch(':id/read')
  async read(@Param('id') id: string) {
    await this.readNotification.execute({
      notificationId: id,
    });
  }

  @Patch(':id/unread')
  async unread(@Param('id') id: string) {
    await this.unReadNotification.execute({
      notificationId: id,
    });
  }
}
