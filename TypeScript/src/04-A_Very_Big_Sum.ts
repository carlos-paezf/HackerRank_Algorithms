/**
 * Created on Mon Feb 21 2022
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
 * Complete the `aVeryBigSum` function below
 * 
 * The function is expected to return a LONG_INTEGER
 * The function accepts LONG_INTEGER_ARRAY ar as parameter
 */

/**
 * Given an array of integers, add up all the numbers
 * @param {number} n - number of integers in the array
 * @param {number[]} ar - an array of integers where each integer is between 0 and 10^10
 * @returns The sum of all the elements in the array.
 */
const aVeryBigSum = (n: number, ar: number[]): number => {
    let sum: number = 0
    if (1 <= n && n <= 10) {
        for (let i: number = 0; i <= n; i++) {
            sum += (0 <= ar[i] && ar[i] <= Math.pow(10, 10)) ? ar[i] : 0
        }
    }
    return sum
}


/**
 * Given an array of integers, find the sum of all the elements in the array
 */
const main = () => {
    const ws: WriteStream = createWriteStream('./output.txt')

    const arCount: number = parseInt(readLine().trim(), 10)

    const ar: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10))

    const result: number = aVeryBigSum(arCount, ar)

    ws.write(result + '\n')

    ws.end()
}