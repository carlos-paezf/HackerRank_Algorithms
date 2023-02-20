/**
 * Created on Thu Mar 10 2022
 * 
 * @author Carlos Páez
 */
'use strict'

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

/**
 * It loops through the array of candles, checks if the value is within the range of 1 to 10^7, and if
 * it is, it checks if the value is greater than the max value, if it is, it sets the max value to the
 * current value and sets the countCandles to 1, if it's not, it checks if the value is equal to the
 * max value, if it is, it increments the countCandles by 1.
 * 
 * @param candles - an array of integers representing candle heights
 * @returns The number of candles that can be blown out.
 */
const birthdayCakeCandles = (candles) => {
    let max = 0
    let countCandles = 0

    for (let i = 0; i < candles.length; i++) {
        if((1 <= candles[i]) && (candles[i] <= Math.pow(10, 7))) {
            if (candles[i] > max) {
                max = candles[i]
                countCandles = 1
            } else if (candles[i] === max) {
                countCandles++
            }
        }
    }

    return countCandles
}


/**
 * It takes an array of numbers and returns the number of times the largest number appears in the
 * array.
 */
const main = () => {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const candlesCount = parseInt(readLine().trim(), 10);

    const candles = readLine().replace(/\s+$/g, '').split(' ').map(candlesTemp => parseInt(candlesTemp, 10));

    const result = birthdayCakeCandles(candles);

    ws.write(result + '\n');

    ws.end();
}
