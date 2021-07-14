import zeromq from 'zeromq';                                  // (1)
import {ZmqMiddlewareManager} from './zmqMiddlewareManager.js';
import {jsonMiddleware} from './jsonMiddleware.js';
import {zlibMiddleware} from './zlibMiddleware.js';

async function main() {
    const socket = new zeromq.Reply();                          // (2)
    await socket.bind('tcp://127.0.0.1:5000');
    const zmqm = new ZmqMiddlewareManager(socket);              // (3)
    zmqm.use(zlibMiddleware());
    zmqm.use(jsonMiddleware());
    zmqm.use({                                                 // (4)
        async inbound(message) {
            console.log('Received', message);
            if (message.action === 'ping') {
                await this.send({action: 'pong', echo: message.echo});
            }
            return message;
        }
    });
    console.log('Server started');
}

main();
