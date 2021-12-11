const EventEmitter = require('events');

class School extends EventEmitter {
    startPeriod() {
        console.log('Class started');

        // raise event after class ended
        setTimeout(() => {
            this.emit('bellRing', {
                period: 'first',
                text: 'period ended',
            });
        }, 2000);
    }
}

module.exports = School;
