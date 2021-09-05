class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.av = 0
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.av = Math.ceil((this.max + this.min) / 2);
        return this.av
    }

    lower() {
        this.max = this.av;
    }

    greater() {
        this.min = this.av;
    }
}

module.exports = GuessingGame;
