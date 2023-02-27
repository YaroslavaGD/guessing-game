class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.mid = this.min + Math.round((this.max - this.min)/2);
    }

    guess() {
        return this.mid;
    }

    lower() {
        this.max = this.mid;
        this.mid = this.min + Math.round((this.max - this.min)/2);
    }

    greater() {
        this.min = this.mid;
        this.mid = this.min + Math.round((this.max - this.min)/2);
    }
}

module.exports = GuessingGame;
