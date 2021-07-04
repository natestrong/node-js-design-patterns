import {Transform} from 'stream';

export class ParallelStream extends Transform {
    private userTransform: any;
    private running: number;
    private terminateCb: Function;


    constructor(userTransform, opts = {}) {                             // (1)
        super({objectMode: true, ...opts});
        this.userTransform = userTransform;
        this.running = 0;
        this.terminateCb = null;
    }

    _transform(chunk, enc, done) {    // (2)
        this.running++;
        this.userTransform(
            chunk,
            enc,
            this.push.bind(this),
            this._onComplete.bind(this)
        );
        done();
    }

    _flush(done) {                                  // (3)
        if (this.running > 0) {
            this.terminateCb = done;
        } else {
            done();
        }
    }

    _onComplete(err) {                                               // (4)
        this.running--;
        if (err) {
            return this.emit('error', err);
        }
        if (this.running === 0) {
            this.terminateCb && this.terminateCb();
        }
    }
}


