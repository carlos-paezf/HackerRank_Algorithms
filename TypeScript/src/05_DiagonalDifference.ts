/**
 * Created on Thu Feb 24 2022
 * @author Carlos Páez
 */
'use strict'

import { WriteStream, createWriteStream } from 'fs'


process.stdin.resume()
process.stdin.setEncoding('utf-8')


let inputString: string = ''
let inputLines: string[] = []
let currentLine: number = 0


/* Listening to the input from the user and storing it in the variable `inputString` */
process.stdin.on('data', (inputStdin: string): string => inputString += inputStdin)


/* Listening to the input from the user and storing it in the variable `inputString` */
process.stdin.on('end', () => {
    inputLines = inputString.split('\n')
    inputString = ''
    main()
})


/**
 * It reads the next line from the inputLines array and increments the currentLine variable by 1
 */
const readLine = (): string => inputLines[currentLine++]

/*
 * Complete the `diagonalDifference` function below
 * 
 * The function is expected to return an INTEGER
 * The function accepts 2D_INTEGER_ARRAY arr as parameter
 */


/**
 * Given a 2D array, find the difference between the sum of the diagonals
 * @param {number[][]} arr - an array of integers
 * @returns The absolute value of the difference between the sum of the numbers in the left-to-right
 * diagonal and the right-to-left diagonal.
 */
const diagonalDifference = (arr: number[][]): number => {
    let left_to_right: number = 0
    let right_to_left: number = 0
    let x: number = 0
    let y: number = arr.length - 1

    for (let i: number = 0; i < arr.length; i++) {
        left_to_right += ((-100 <= arr[i][x]) && (arr[i][x] <= 100)) ? arr[i][x] : 0
        right_to_left += ((-100 <= arr[i][y]) && (arr[i][y] <= 100)) ? arr[i][y] : 0
        x++
        y--
    }

    return Math.abs(left_to_right - right_to_left)
}


/**
 * Given a square matrix, calculate the absolute difference between the sums of its diagonals
 */
const main = () => {
    const ws: WriteStream = createWriteStream('./output.txt')

    const n: number = parseInt(readLine().trim(), 10)

    const arr: number[][] = Array(n)

    for (let i: number = 0; i < arr.length; i++) {
        arr[i] = readLine().replace(/\s+$/, '').split(' ').map(arrTemp => parseInt(arrTemp, 10))
    }
    
    const result: number = diagonalDifference(arr)

    ws.write(result + '\n')

    ws.end()
}