import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '../repositories/notificationRepository';

@Injectable()
export class SendNotificationUseCase {
  constructor(private notificationRepository: NotificationRepository) {}
}
