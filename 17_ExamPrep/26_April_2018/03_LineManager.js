class LineManager {
    constructor(busStops) {
        this.stops = busStops;
        this.currentStop = 0;
        this.delay = 0;
        this.totalDuration = 0;
    }

    // get stops() {
    //     return this._stops;
    // }

    get atDepot() {
        return this.currentStop === this._stops.length - 1;
    }

    get nextStopName() {
        if (this.atDepot) {
            return 'At depot.'
        }
        return this._stops[this.currentStop + 1].name;
    }

    get currentDelay() {
        return this.delay;
    }

    set stops(stopsArray) {
        if (!Array.isArray(stopsArray)) {
            throw  Error('The stop name should not be empty string');
        }
        stopsArray.forEach(stop => {
            if (typeof stop.name !== "string" || stop.name.trim() === '') {
                throw  new Error('The stop name should not be empty string');
            }

            if (typeof stop.timeToNext !== "number" || stop.timeToNext < 0) {
                throw new Error('The duration should be positive');
            }

            this._stops = stopsArray;
        })
    }

    arriveAtStop(minutes) {
        if (minutes < 0 || this.atDepot) {
            throw new Error('Wrong input');
        }
        this.totalDuration += minutes;
        this.delay += minutes - this._stops[this.currentStop].timeToNext;
        this.currentStop++;
        return !this.atDepot;
    }

    toString(){
        let result = 'Line summary\n' +
            `- Next stop: ${this.atDepot?"Course completed":this.nextStopName}\n` +
            `- Stops covered: ${this.currentStop}\n` +
            `- Time on course: ${this.totalDuration} minutes\n` +
            `- Delay: ${this.delay} minutes`;

        return result;
    }
}

// Initialize a line manager with correct values
const man = new LineManager([
    {name: 'Depot', timeToNext: 4},
    {name: 'Romanian Embassy', timeToNext: 2},
    {name: 'TV Tower', timeToNext: 3},
    {name: 'Interpred', timeToNext: 4},
    {name: 'Dianabad', timeToNext: 2},
    {name: 'Depot', timeToNext: 0},
]);

// Travel through all the stops until the bus is at depot
while(man.atDepot === false) {
    console.log(man.toString());
    man.arriveAtStop(4);
}