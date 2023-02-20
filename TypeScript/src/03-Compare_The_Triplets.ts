/**
 * Created on Sun Feb 20 2022
 * @author Carlos Páez
 */
'use strict'

import { WriteStream, createWriteStream } from 'fs'


process.stdin.resume()
process.stdin.setEncoding('utf-8')


let inputString: string = ''
let inputLines: string[] = []
let currentLine: number = 0


/* Reading the input from the standard input (stdin) and storing it in the variable `inputString` */
process.stdin.on('data', (inputStdin: string): void => {
    inputString += inputStdin
})


/* A callback function that is called when the standard input (stdin) is closed. */
process.stdin.on('end', (): void => {
    inputLines = inputString.split('\n')
    inputString = ''
    main()
})


/**
 * It reads the next line from the inputLines array and increments the currentLine variable by 1
 */
const readLine = (): string => inputLines[currentLine++]


/**
 * Given two integers i and j, return true if i and j are both between 1 and 100 inclusive
 * @param {number} i - the index of the first number
 * @param {number} j - the number of the row in the matrix that we are currently on.
 * @returns a Boolean value.
 */
const rangeConstraint = (i: number, j: number): Boolean => {
    if (((1 <= i) && (i <= 100)) && ((1 <= j) && (j <= 100))) return true
    else return false
}


/**
 * Given two arrays of integers, compare the values at each index and return an array of two integers
 * where the first value is the number of values in the first array that are greater than the
 * corresponding value in the second array and the second value is the number of values in the second
 * array that are greater than the corresponding value in the first array
 * @param {number[]} a - an array of integers representing Alice's challenge rating
 * @param {number[]} b - an array of integers representing Alice's challenge rating
 * @returns An array of two numbers.
 */
const compareTriplets = (a: number[], b: number[]): number[] => {
    let points: number[] = [0, 0]

    let maxLen: number = (a.length > b.length) ? a.length : b.length
    for (let i: number = 0; i <= maxLen; i++) {
        if (a[i] > b[i] && rangeConstraint(a[i], b[i])) points[0] += 1
        else if (a[i] < b[i] && rangeConstraint(a[i], b[i])) points[1] += 1
    }

    return points
}


/**
 * Compare two arrays and return the result as an array
 */
const main = (): void => {
    const ws: WriteStream = createWriteStream('./output.txt')

    const a: number[] = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10))

    const b: number[] = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10))

    const result: number[] = compareTriplets(a, b)

    ws.write(result.join(' ') + '\n')

    ws.end()
}