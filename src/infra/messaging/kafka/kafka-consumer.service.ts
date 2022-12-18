import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['amazing-moth-11145-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'YW1hemluZy1tb3RoLTExMTQ1JPuxe28KWRk0GO5_aH75Ub2fz51G9JFcKv7Cnbk',
          password:
            '3XGsnOV4-TVElfwgmhQFJtp0YbbPtUrdTlNQyBwRl4oWhtKZeXdBsOiBuetyMwHqTRNLnw==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
