import { Notification } from '@app/entities/notification/notification';

export abstract class NotificationRepository {
  abstract create(notification: Notification): Promise<void>;
  //abstract findAllNotifications(): Promise<Notification[]>;
  abstract findById(notificationId: string): Promise<Notification | null>;
  abstract save(notification: Notification): Promise<void>;
  abstract countManyByRecipientId(recipientId: string): Promise<number>;
  abstract findByManyNotificationRecipientId(
    recipientId: string,
  ): Promise<Notification[]>;
}
