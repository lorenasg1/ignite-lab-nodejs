import { CancelNotification } from '@app/use-cases/cancel-notification.usecase';
import { CountRecipientNotifications } from '@app/use-cases/count-recipient-notifications.usecase';
import { GetRecipientNotifications } from '@app/use-cases/get-recipient-notifications.usecase';
import { ReadNotification } from '@app/use-cases/read-notification.usecase';
import { UnreadNotification } from '@app/use-cases/unread-notification.usecase';
import { Module } from '@nestjs/common';
import { SendNotification } from 'src/app/use-cases/send-notification.usecase';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotifications,
    GetRecipientNotifications,
    ReadNotification,
    UnreadNotification,
  ],
})
export class HttpModule {}
