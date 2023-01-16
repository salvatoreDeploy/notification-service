import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notificationsRepository';
import { NotificationError } from './errors/notificationError';
import { makeNotification } from '@test/factories/notificationFactory';
import { ReadNotificationUseCase } from './readNotificationUseCase';

describe('Read notification', () => {
  it('should be able to read a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const readNotificationUseCase = new ReadNotificationUseCase(
      notificationRepository,
    );

    const notification = makeNotification();

    await notificationRepository.create(notification);

    await readNotificationUseCase.execute({
      notificationId: notification.id,
    });

    // console.log(notifications);

    expect(notificationRepository.notifications[0].readAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to read a notification when it does not exist', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const readNotificationUseCase = new ReadNotificationUseCase(
      notificationRepository,
    );

    expect(() => {
      return readNotificationUseCase.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationError);
  });
});
