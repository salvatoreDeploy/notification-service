import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notificationsRepository';
import { CancelNotificationUseCase } from './cancelNotificationUseCase';
import { NotificationError } from './errors/notificationError';
import { makeNotification } from '@test/factories/notificationFactory';

describe('Cancel notification', () => {
  it('should be able to cancel a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const cancelNotificationUseCase = new CancelNotificationUseCase(
      notificationRepository,
    );

    const notification = makeNotification();

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
