import { Notification } from '../entities/notification';

export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
  abstract countManyByRecipientId(recipientId: string): Promise<number>;
  abstract findById(notificationId: string): Promise<Notification | null>;
  abstract findManyByRecipientId(recipientId: string): Promise<Notification[]>;
  abstract save(notification: Notification): Promise<void>;
}
