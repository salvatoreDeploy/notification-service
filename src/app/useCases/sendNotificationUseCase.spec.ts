import { SendNotificationUseCase } from './sendNotificationUseCase';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotificationUseCase();

    const { notification } = await sendNotification.execute({
      recipientId: 'example-recipient-id',
      category: 'social',
      content: 'This is a notification',
    });

    expect(notification).toBeTruthy();
  });
});
