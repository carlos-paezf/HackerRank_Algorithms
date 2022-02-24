/**
 * Created on Thu Feb 24 2022
 * @author Carlos Páez
 */
'use strict'

const fs = require('fs')

process.stdin.resume()
process.stdin.setEncoding('utf-8')


let inputString = ''
let currentLine = 0


/* Listening for the end of the input stream and then calling the main function. */
process.stdin.on('data', (inputStdin) => {
    inputString += inputStdin
})


/* Listening for the end of the input stream and then calling the main function. */
process.stdin.on('end', () => {
    inputString = inputString.split('\n')
    main()
})


/**
 * It reads a line from the input string and returns it
 */
const readLine = () => inputString[currentLine++]


/*
 * Complete the `diagonalDifference` function below
 * 
 * The function is expected to return an INTEGER
 * The function accepts 2D_INTEGER_ARRAY arr as parameter
 */


/**
 * Given an array of arrays, return the absolute difference between the sums of its diagonals
 * @param arr - an array of integers
 * @returns The absolute value of the difference between the sum of the numbers in the left-to-right
 * diagonal and the right-to-left diagonal.
 */
const diagonalDifference = (arr) => {
    let left_to_right = 0 
    let right_to_left = 0
    let x = 0 
    let y = arr.length - 1

    for (let i = 0; i < arr.length; i++) {
        left_to_right += arr[i][x]
        right_to_left += arr[i][y]
        x++
        y--
    }

    return Math.abs(left_to_right - right_to_left)
}


/**
 * Given a square matrix, calculate the absolute difference between the sums of its diagonals
 */
const main = () => {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH)

    const n = parseInt(readLine().trim(), 10)

    let arr = Array(n)

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/, '').split(' ').map(arrTemp => parseInt(arrTemp, 10))
    }

    const result = diagonalDifference(arr)

    ws.write(result + '\n')

    ws.end()
}