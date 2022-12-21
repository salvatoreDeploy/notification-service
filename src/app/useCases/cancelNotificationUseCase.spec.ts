import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notificationsRepository';
import { CancelNotificationUseCase } from './cancelNotificationUseCase';
import { Notification } from '@app/entities/notification/notification';
import { NotificationContent } from '@app/entities/notification/notificationContent';
import { NotificationError } from './errors/notificationError';

describe('Cancel notification', () => {
  it('should be able to cancel a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const cancelNotificationUseCase = new CancelNotificationUseCase(
      notificationRepository,
    );

    const notification = new Notification({
      category: 'aplication',
      content: new NotificationContent('Nova notificação no sistema'),
      recipientId: 'example-recipient-id',
    });

    await notificationRepository.create(notification);

    await cancelNotificationUseCase.execute({
      notificationId: notification.id,
    });

    // console.log(notifications);

    expect(notificationRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to cancel a notification when it does not exist', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const cancelNotificationUseCase = new CancelNotificationUseCase(
      notificationRepository,
    );

    expect(() => {
      return cancelNotificationUseCase.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationError);
  });
});
