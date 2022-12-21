import { Body, Controller, Post } from '@nestjs/common';
import { SendNotificationUseCase } from 'src/app/useCases/sendNotificationUseCase';

import { CreateNotificationBody } from '@infra/dtos/createNotificationBody';
import { NotificationViewModel } from '@infra/http/view-models/notificationViewModel';

@Controller('notifications')
export class NotificationController {
  constructor(private sendNotification: SendNotificationUseCase) {}

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
}
