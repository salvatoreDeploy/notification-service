import { Replace } from 'src/helpers/Replace';
import { NotificationContent } from './notificationContent';

export interface NotificationData {
  recipientId: string;
  content: NotificationContent;
  category: string;
  readAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private data: NotificationData;

  constructor(data: Replace<NotificationData, { createdAt?: Date }>) {
    this.data = { ...data, createdAt: data.createdAt ?? new Date() };
  }

  public set recipientId(recipientId: string) {
    this.data.recipientId = recipientId;
  }

  public get recipientId(): string {
    return this.data.recipientId;
  }

  public set content(content: NotificationContent) {
    this.data.content = content;
  }

  public get content(): NotificationContent {
    return this.data.content;
  }

  public set readAt(readAt: Date | null | undefined) {
    this.data.readAt = readAt;
  }

  public get readAt(): Date | null | undefined {
    return this.data.readAt;
  }

  public get createdAt(): Date {
    return this.data.createdAt;
  }
}
