interface IProfiler {
    start: Function;
    end: Function;
}

class Profiler implements IProfiler {
    private readonly label: string;
    private lastTime: [number, number];

    constructor(label: string) {
        this.label = label;
        this.lastTime = null;
    }

    start() {
        this.lastTime = process.hrtime();
    }

    end() {
        const diff = process.hrtime(this.lastTime);
        console.log(`Timer "${this.label}" took ${diff[0]}.${diff[1]} seconds.`);
    }
}


const noopProfiler: IProfiler = {
    start() {
    },
    end() {
    },
};

export function createProfiler(label) {
    if (process.env.NODE_ENV === "production") {
        return noopProfiler;
    }
    return new Profiler(label);
}
