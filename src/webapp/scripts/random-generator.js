/**
 * Created by obi on 2017-04-28.
 */

export class RandomGenerator {
    static randomInteger() {
        return Math.ceil(Math.random() * 100);
    }

    static randomIntegerInRange(min, max) {
        return Math.floor(Math.random() * (max-min)) + min;
    }
}