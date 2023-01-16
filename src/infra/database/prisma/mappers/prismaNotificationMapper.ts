import { Notification } from '@app/entities/notification/notification';
import { NotificationContent } from '@app/entities/notification/notificationContent';
import { Notification as RawNotification } from '@prisma/client';
/* Request */

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      category: notification.category,
      content: notification.content.value,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      createdAt: notification.createdAt,
    };
  }

  static toDomain(raw: RawNotification): Notification {
    return new Notification(
      {
        category: raw.category,
        content: new NotificationContent(raw.content),
        recipientId: raw.recipientId,
        readAt: raw.readAt,
        canceledAt: raw.readAt,
        createdAt: raw.createdAt,
      },
      raw.id,
    );
  }
}
