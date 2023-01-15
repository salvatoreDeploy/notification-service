import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '@app/repositories/notificationRepository';
import { Notification } from '@app/entities/notification/notification';

interface ListRecipientNotificationRequest {
  recipientId: string;
}

interface ListRecipientNotificationResponse {
  notifications: Notification[];
}

@Injectable()
export class ListRecipientNotificationUseCase {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(
    request: ListRecipientNotificationRequest,
  ): Promise<ListRecipientNotificationResponse> {
    const { recipientId } = request;

    const notifications =
      await this.notificationRepository.findByManyNotificationRecipientId(
        recipientId,
      );

    return { notifications };
  }
}
