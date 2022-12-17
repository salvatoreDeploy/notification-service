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

  it('should be possible to correctly set the value of the recipientId', () => {
    const notification = new Notification({
      content: new NotificationContent('Nova notificação'),
      category: 'notification',
      recipientId: 'example-recipient-id',
      createdAt: new Date(),
    });

    notification.recipientId = 'New value';

    expect(notification.recipientId).toEqual('New value');
  });

  it('should be possible to get the correct value of recipientId', () => {
    const notification = new Notification({
      content: new NotificationContent('Nova notificação'),
      category: 'notification',
      recipientId: 'example-recipient-id',
      createdAt: new Date(),
    });

    expect(notification.recipientId).toEqual('example-recipient-id');
  });

  it('it should be possible to correctly set the value of the receiver and be an instance of the object', () => {
    const notification = new Notification({
      content: new NotificationContent('Nova notificação'),
      category: 'notification',
      recipientId: 'example-recipient-id',
      createdAt: new Date(),
    });

    notification.content = new NotificationContent('New Value');

    expect(notification.content).toBeInstanceOf(NotificationContent);
    expect(notification.content).toEqual({ content: 'New Value' });
  });

  it('it should be possible to correctly get the value of the receiver and be an instance of the object', () => {
    const notification = new Notification({
      content: new NotificationContent('Nova notificação'),
      category: 'notification',
      recipientId: 'example-recipient-id',
      createdAt: new Date(),
    });

    expect(notification.content).toBeInstanceOf(NotificationContent);
    expect(notification.content).toEqual({ content: 'Nova notificação' });
  });

  it('it should be possible to correctly set and get the value of the readAt be date, undefined or be null', () => {
    const notification = new Notification({
      content: new NotificationContent('Nova notificação'),
      category: 'notification',
      recipientId: 'example-recipient-id',
      createdAt: new Date(),
    });

    notification.readAt = new Date();

    expect(notification.readAt).toBeInstanceOf(Date);

    notification.readAt = undefined;

    expect(notification.readAt).toBeUndefined();

    notification.readAt = null;

    expect(notification.readAt).toBeNull();
  });

  it('it should be possible to correctly get the value of the createdAt and be an instance of the object', () => {
    const notification = new Notification({
      content: new NotificationContent('Nova notificação'),
      category: 'notification',
      recipientId: 'example-recipient-id',
      createdAt: new Date(2022, 1, 1),
    });

    expect(notification.createdAt).toBeInstanceOf(Date);
    expect(notification.createdAt).toEqual(new Date(2022, 1, 1));
  });
});
