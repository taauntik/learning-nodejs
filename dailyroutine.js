const EventEmitter = require('events');

class DailyRoutine extends EventEmitter {
    startWithFajr() {
        this.emit('fajr', {
            time: 'fajr',
        });
    }

    prayForZohor() {
        this.emit('zohor', {
            time: 'zohor',
        });
    }

    prayForAsor() {
        this.emit('asor', {
            time: 'asor',
        });
    }

    prayForMagrib() {
        this.emit('magrib', {
            time: 'magrib',
        });
    }

    prayForEsha() {
        this.emit('esha', {
            time: 'esha',
        });
    }
}
module.exports = DailyRoutine;
