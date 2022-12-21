export class NotificationError extends Error {
  constructor() {
    super('Notification not exists');
  }
}
