import { NotificationContent } from '@app/entities/notification/notificationContent';
import {
  Notification,
  NotificationData,
} from '@app/entities/notification/notification';

type Override = Partial<NotificationData>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new NotificationContent('Nova soliciatação de amizade'),
    recipientId: 'example-recipient-1',
    ...override,
  });
}
