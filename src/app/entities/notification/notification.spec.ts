import { Notification } from './notification';
import { NotificationContent } from './notificationContent';

describe('Notification', () => {
  it('Should be able to create a notification', () => {
    const notification = new Notification({
      content: new NotificationContent('Nova notificação'),
      category: 'notification',
      recipientId: 'example-recipient-id',
      createdAt: new Date(),
    });

    expect(notification).toBeTruthy();
  });
});
