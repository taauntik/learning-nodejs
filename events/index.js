const School = require('./school');
const DailyRoutine = require('./dailyroutine');

// register a listener for a bell ring event

const school = new School();
const newDay = new DailyRoutine();

school.on('bellRing', ({ period, text }) => {
    console.log(`We need to run because ${period} ${text}`);
});

newDay.on('fajr', ({ time }) => {
    console.log(`it's time to pray it's ${time} time`);
});

newDay.on('zohor', ({ time }) => {
    console.log(`it's time pray, it's ${time} time`);
});

newDay.on('asor', ({ time }) => {
    console.log(`it's time to pray, it's ${time} time`);
});

newDay.on('magrib', ({ time }) => {
    console.log(`it's time to pray, it's ${time} time`);
});

newDay.on('esha', ({ time }) => {
    console.log(`it's time to pray, it's ${time} time`);
});

school.startPeriod();
newDay.startWithFajr();
newDay.prayForZohor();
newDay.prayForAsor();
newDay.prayForMagrib();
newDay.prayForEsha();
