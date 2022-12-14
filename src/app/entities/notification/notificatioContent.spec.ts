import { NotificationContent } from './notificationContent';

describe('Notification Content', () => {
  it('Should be able to create a notification content', () => {
    const content = new NotificationContent('Voce tem uma notificação nova');

    expect(content).toBeTruthy();
  });

  it('it should be possible to correctly get the value of the content', () => {
    const content = new NotificationContent('Voce tem uma notificação nova');

    expect(content.value).toEqual('Voce tem uma notificação nova');
  });

  it('Should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new NotificationContent('aaa')).toThrow();
  });

  it('Should not be able to create a notification content with more than 240 characters', () => {
    expect(() => new NotificationContent('a'.repeat(241))).toThrow(
      'Conteudo invalido',
    );
  });
});
