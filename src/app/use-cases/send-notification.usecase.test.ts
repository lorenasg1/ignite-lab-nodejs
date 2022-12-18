import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications.repository';
import { SendNotification } from './send-notification.usecase';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();

    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      content: 'notification',
      category: 'social',
      recipientId: 'recipientId',
    });

    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });

  // it('should be able to send a notification', async () => {
  //   const sendNotification = new SendNotification();

  //   const { notification } = await sendNotification.execute({
  //     content: 'notification',
  //     category: 'social',
  //     recipientId: 'recipientId',
  //   });

  //   expect(notification).toBeTruthy();
  // });
});
