/**
 * Created on Sat Feb 19 2022
 * @author Carlos Páez
 */
'use strict'

const fs = require('fs')

process.stdin.resume()
process.stdin.setEncoding('utf-8')

let inputString = ''
let currentLine = 0


/* Reading the input from the standard input (stdin) and storing it in the variable inputString. */
process.stdin.on('data', (inputStdin) => {
    inputString += inputStdin
})


/* This is a callback function that is called when the standard input (stdin) is closed. */
process.stdin.on('end', () => {
    inputString = inputString.split('\n')
    main()
})


/**
 * It reads a line from the input string and increments the current line counter
 */
const readLine = () => inputString[currentLine++]


/*
 * Complete the `aVeryBigSum` function below.
 * 
 * The function is expected to return a LONG_INTEGER
 * The function accepts LONG_INTEGER_ARRAY ar as parameter
 */

/**
 * Given an array of integers, add up all the numbers
 * @param n - an integer, the number of elements in our array.
 * @param ar - an array of integers.
 * @returns The sum of all the elements in the array.
 */
const aVeryBigSum = (n, ar) => {
    let sum = 0
    if (1 <= n && n <= 10) {
        for (let i = 0; i <= n; i++) {
            sum += (0 <= ar[i] && ar[i] <= Math.pow(10, 10)) ? ar[i] : 0
        }
    }
    return sum
}


/**
 * Given an array of integers, find the sum of all the elements in the array
 */
const main = () => {
    const ws = fs.createWriteStream('./output.txt')

    const arCount = parseInt(readLine().trim(), 10)

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp = parseInt(arTemp, 10))

    const result = aVeryBigSum(arCount, ar)

    ws.write(result + '\n')

    ws.end()
}