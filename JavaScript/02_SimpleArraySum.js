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


/* Reading the input from the user and storing it in the variable `inputString` */
process.stdin.on('data', (inputStdin) => {
    inputString += inputStdin
})


/* A callback function that is called when the input stream is ended. */
process.stdin.on('end', () => {
    inputString = inputString.split('\n')
    main()
})


/**
 * It reads a line from the input string and increments the current line counter
 */
const readLine = () => inputString[currentLine++]


/*
 * Complete the `simpleArraySum` function below.
 * 
 * The function is expected to return as INTEGER
 * The function accepts INTEGER_ARRAY ar as parameter
 */


/**
 * Given an array of integers, return the sum of the array
 * @param ar - an array of integers
 * @returns The sum of all the numbers in the array.
 */
const simpleArraySum = (ar) => {
    let sum = 0
    ar.forEach(x => x <= 1000 ? sum += x : sum += 0)
    return sum
}


/**
 * Given an array of integers, find the sum of its elements
 */
const main = () => {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH)

    // const arCount = parseInt(readLine().trim(), 10)

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10))

    const result = simpleArraySum(ar)

    ws.write(result + '\n')

    ws.end()
}