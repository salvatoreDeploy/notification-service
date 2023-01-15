import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notificationsRepository';
import { makeNotification } from '@test/factories/notificationFactory';
import { ListRecipientNotificationUseCase } from './listRecipentNotificationUseCase';

describe('List recipients notification', () => {
  it('should be able to count recipient a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const listRecipientsNotificationUseCase =
      new ListRecipientNotificationUseCase(notificationRepository);

    await notificationRepository.create(
      makeNotification({ recipientId: 'example-recipient-1' }),
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'example-recipient-1' }),
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'example-recipient-2' }),
    );

    const { notifications } = await listRecipientsNotificationUseCase.execute({
      recipientId: 'example-recipient-1',
    });

    // console.log(notifications);

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'example-recipient-1' }),
        expect.objectContaining({ recipientId: 'example-recipient-1' }),
      ]),
    );
  });
});
