/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
import { Replace } from 'src/helpers/Replace';
import { NotificationContent } from './notificationContent';
import { randomUUID } from 'node:crypto';

export interface NotificationData {
  recipientId: string;
  content: NotificationContent;
  category: string;
  readAt?: Date | null;
  createdAt: Date;
  canceledAt?: Date | null;
}

export class Notification {
  private _id: string;
  private data: NotificationData;

  constructor(
    data: Replace<NotificationData, { createdAt?: Date }>,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.data = { ...data, createdAt: data.createdAt ?? new Date() };
  }

  public get id() {
    return this._id;
  }

  public set recipientId(recipientId: string) {
    this.data.recipientId = recipientId;
  }

  public get recipientId(): string {
    return this.data.recipientId;
  }

  public set category(category: string) {
    this.data.category = category;
  }

  public get category(): string {
    return this.data.category;
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

  public read() {
    this.data.readAt = new Date();
  }

  public unRead() {
    this.data.readAt = null;
  }

  public get readAt(): Date | null | undefined {
    return this.data.readAt;
  }

  public get createdAt(): Date {
    return this.data.createdAt;
  }

  public cancel() {
    this.data.canceledAt = new Date();
  }

  public get canceledAt(): Date {
    return this.data.canceledAt;
  }
}
