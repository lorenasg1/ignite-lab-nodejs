import { makeNotification } from '@test/factories/notification.factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications.repository';
import { NotificationNotFoundError } from './errors/notification-not-found.error';
import { ReadNotification } from './read-notification.usecase';
import { UnreadNotification } from './unread-notification.usecase';

describe('Unead notification', () => {
  it('should be able to unread a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();

    const unreadNotification = new UnreadNotification(notificationsRepository);

    const notification = makeNotification({ readAt: new Date() });

    notificationsRepository.create(notification);

    await unreadNotification.execute({ notificationId: notification.id });

    expect(notificationsRepository.notifications[0].readAt).toBeNull();
  });

  it('should not be able to unread a non existing notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();

    const readNotification = new ReadNotification(notificationsRepository);

    expect(() => {
      return readNotification.execute({
        notificationId: 'non-existing-notification',
      });
    }).rejects.toThrow(NotificationNotFoundError);
  });
});
