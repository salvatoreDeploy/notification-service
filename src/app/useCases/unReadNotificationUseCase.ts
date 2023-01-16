import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '@app/repositories/notificationRepository';
import { NotificationError } from './errors/notificationError';

interface UnReadNotificationRequest {
  notificationId: string;
}

type UnReadNotificationResponse = void;

@Injectable()
export class UnReadNotificationUseCase {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(
    request: UnReadNotificationRequest,
  ): Promise<UnReadNotificationResponse> {
    const { notificationId } = request;

    const notification = await this.notificationRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationError();
    }

    notification.unRead();

    await this.notificationRepository.save(notification);
  }
}
