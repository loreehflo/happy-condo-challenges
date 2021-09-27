
function birthdayCakecandles(candles) {

    let highCandle = 0;
    let count = 0;

    for (let i = 0; i < candles.length; i++) {

        let currentCandle = candles[i];

        if (currentCandle > highCandle) {
            highCandle = currentCandle;
            count = 1;
        } else if (currentCandle === highCandle) {
            count++;
        }

    }

    return count;

}


console.log(birthdayCakecandles([6, 6, 5, 6, 7, 3, 2, 4]))