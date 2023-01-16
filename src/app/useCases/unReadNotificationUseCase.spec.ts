import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notificationsRepository';
import { NotificationError } from './errors/notificationError';
import { makeNotification } from '@test/factories/notificationFactory';
import { UnReadNotificationUseCase } from './unReadNotificationUseCase';

describe('Unread notification', () => {
  it('should be able to unread a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const unReadNotificationUseCase = new UnReadNotificationUseCase(
      notificationRepository,
    );

    const notification = makeNotification({ readAt: new Date() });

    await notificationRepository.create(notification);

    await unReadNotificationUseCase.execute({
      notificationId: notification.id,
    });

    // console.log(notifications);

    expect(notificationRepository.notifications[0].readAt).toBeNull();
  });

  it('should not be able to unread a non notification when it does not exist', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const unReadNotificationUseCase = new UnReadNotificationUseCase(
      notificationRepository,
    );

    expect(() => {
      return unReadNotificationUseCase.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationError);
  });
});
