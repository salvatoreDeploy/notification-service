import { InMemoryNotificationRepository } from '../../../test/repositories/in-memory-notificationsRepository';
import { SendNotificationUseCase } from './sendNotificationUseCase';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const sendNotification = new SendNotificationUseCase(
      notificationRepository,
    );

    const { notification } = await sendNotification.execute({
      recipientId: 'example-recipient-id',
      category: 'social',
      content: 'This is a notification',
    });

    // console.log(notifications);

    expect(notificationRepository.notifications).toHaveLength(1);
    expect(notificationRepository.notifications[0]).toEqual(notification);
  });
});
