import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '@app/repositories/notificationRepository';
import { NotificationError } from './errors/notificationError';

interface ReadNotificationRequest {
  notificationId: string;
}

type ReadNotificationResponse = void;

@Injectable()
export class ReadNotificationUseCase {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(
    request: ReadNotificationRequest,
  ): Promise<ReadNotificationResponse> {
    const { notificationId } = request;

    const notification = await this.notificationRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationError();
    }

    notification.read();

    await this.notificationRepository.save(notification);
  }
}
