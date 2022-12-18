import { makeNotification } from '@test/factories/notification.factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications.repository';
import { GetRecipientNotifications } from './get-recipient-notifications.usecase';

describe('Get recipient notifications', () => {
  it('should be able to get notifications by recipient', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();

    const getRecipientNotifications = new GetRecipientNotifications(
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

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: 'recipientId1',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'recipientId1' }),
        expect.objectContaining({ recipientId: 'recipientId1' }),
      ]),
    );
  });
});
