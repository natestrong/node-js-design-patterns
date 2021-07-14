import superagent from 'superagent';

export class CheckUrls {
    private readonly urls: string[];

    constructor(urls) {                                             // (1)
        this.urls = urls;
    }

    [Symbol.asyncIterator]() {
        const urlsIterator = this.urls[Symbol.iterator]();          // (2)
        return {
            async next() {                                          // (3)
                const iteratorResult = urlsIterator.next();         // (4)
                if (iteratorResult.done) {
                    return {done: true};
                }
                const url = iteratorResult.value;
                try {
                    const checkResult = await superagent           // (5)
                        .head(url)
                        .redirects(2);
                    return {
                        done: false,
                        value: `${url} is up, status: ${checkResult.status}`
                    };
                } catch (err) {
                    return {
                        done: false,
                        value: `${url} is down, error: ${err.message}`
                    };
                }
            }
        };
    }
}


async function main() {
    const checkUrls = new CheckUrls([
        'https://nodejsdesignpatterns.com',
        'https://example.com',
        'https://mustbedownforsurehopefully.com'
    ]);
    for await (const status of checkUrls) {
        console.log(status);
    }
}

main();
