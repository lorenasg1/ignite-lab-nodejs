import { makeNotification } from '@test/factories/notification.factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications.repository';
import { CountRecipientNotifications } from './count-recipient-notifications.usecase';

describe('Count recipient notification', () => {
  it('should be able to count the number of notifications of a recipient', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();

    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    notificationsRepository.create(
      makeNotification({ recipientId: 'recipientId1' }),
    );

    notificationsRepository.create(
      makeNotification({ recipientId: 'recipientId1' }),
    );

    notificationsRepository.create(
      makeNotification({ recipientId: 'recipientId2' }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'recipientId1',
    });

    expect(count).toEqual(2);
  });
});
