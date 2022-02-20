/**
 * Created on Sat Feb 19 2022
 * @author Carlos Páez
 */

'use strict'

import { WriteStream, createWriteStream } from "fs"


process.stdin.resume()
process.stdin.setEncoding('utf-8')

let inputString: string = ''
let inputLines: string[] = []
let currentLine: number = 0


/* Reading the input from the user and storing it in the variable `inputString` */
process.stdin.on('data', (inputStdin: string): void => {
    inputString += inputStdin
})


/* Reading the input from the user and storing it in the variable `inputString` */
process.stdin.on('end', (): void => {
    inputLines = inputString.split('\n')
    inputString = ''
    main()
})


/**
 * It reads the next line from the inputLines array and increments the currentLine variable
 */
const readLine = (): string => inputLines[currentLine++]


/**
 * Given an array of integers, return the sum of the array
 * @param {number[]} ar - an array of integers
 * @returns The sum of all the numbers in the array.
 */
const simpleArraySum = (ar: number[]): number => {
    let sum: number = 0
    ar.forEach((x: number) => x <= 1000 ? sum += x : sum += 0)
    return sum
}


/**
 * Given an array of integers, find the sum of its elements
 */
const main = (): void => {
    const ws: WriteStream = createWriteStream('./output.txt')

    // const arCount: number = parseInt(readLine().trim(), 10)

    const ar: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10))
    
    const result: number = simpleArraySum(ar)

    ws.write(result + '\n')

    ws.end()
}