import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notificationsRepository';
import { CountRecipientNotificationUseCase } from './countRecipientNotificationUseCase';
import { makeNotification } from '@test/factories/notificationFactory';

describe('Count recipients notification', () => {
  it('should be able to count recipient a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const countRecipientsNotificationUseCase =
      new CountRecipientNotificationUseCase(notificationRepository);

    await notificationRepository.create(
      makeNotification({ recipientId: 'example-recipient-1' }),
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'example-recipient-1' }),
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'example-recipient-2' }),
    );

    const { count } = await countRecipientsNotificationUseCase.execute({
      recipientId: 'example-recipient-1',
    });

    // console.log(notifications);

    expect(count).toEqual(2);
  });
});
