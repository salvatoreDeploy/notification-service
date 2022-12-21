import { Notification } from '@app/entities/notification/notification';

export abstract class NotificationRepository {
  abstract create(notification: Notification): Promise<void>;
  //abstract findAllNotifications(): Promise<Notification[]>;
}
