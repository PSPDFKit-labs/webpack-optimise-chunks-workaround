class Logger {

    constructor(cb) {
        this.cb = cb
    }

    log(message) {
        this.cb(message)
    }
}

export function log(message) {
    const l = new Logger(console.log)
    l.log(message);
}