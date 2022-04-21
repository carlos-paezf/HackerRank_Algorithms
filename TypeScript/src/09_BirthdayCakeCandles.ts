/**
 * Created on Wed Apr 20 2022
 * 
 * @author Carlos Páez
 */
'use strict'

import { WriteStream, createWriteStream } from 'fs'

process.stdin.resume()
process.stdin.setEncoding('utf-8')

let inputString: string = ''
let inputLines: string[] = []
let currentLine: number = 0


/* Reading the input from the user and storing it in the variable `inputString` */
process.stdin.on('data', (inputStdin: string): void => {
    inputString += inputStdin
})


/* This is a callback function that is called when the input stream is ended. */
process.stdin.on('end', (): void => {
    inputLines = inputString.split('\n')
    inputString = ''
    main()
})


/**
 * It reads the next line from the inputLines array and increments the currentLine variable
 */
const readLine = (): string => inputLines[currentLine++]


/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */


/**
 * It takes an array of numbers, and returns the number of times the largest number in the array occurs
 * @param {number[]} candles - an array of integers representing candle heights
 * @returns The number of candles that are the tallest.
 */
const birthdayCakeCandles = (candles: number[]): number => {
    let max: number = 0
    let count: number = 0

    for (let i = 0; i < candles.length; i++) {
        if ((1 <= candles[i]) && (candles[i] <= Math.pow(10, 7))) {
            if (candles[i] > max) {
                max = candles[i]
                count = 1
            } else if (candles[i] === max) {
                count++;
            }
        }
    }

    return count
}


/**
 * Given an array of integers, find the sum of all the elements in the array
 */
const main = () => {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const candlesCount: number = parseInt(readLine().trim(), 10);

    const candles: number[] = readLine().replace(/\s+$/g, '').split(' ').map(candlesTemp => parseInt(candlesTemp, 10));

    const result: number = birthdayCakeCandles(candles);

    ws.write(result + '\n');

    ws.end();
}