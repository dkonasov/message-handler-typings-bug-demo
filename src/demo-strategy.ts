import {
  CustomTransportStrategy,
  Server,
  Transport,
} from '@nestjs/microservices';

export class DemoStrategy extends Server implements CustomTransportStrategy {
  transportId?: symbol | Transport;
  async listen(callback: () => void) {
    const handler = this.messageHandlers.get('foo');
    const result = await handler(null);
    console.log(typeof result); // prints "string", despite result is typed as Observable
    callback();
  }
  close() {
    console.log('close');
  }
}
