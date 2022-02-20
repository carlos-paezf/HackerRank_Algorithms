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


/* Reading the input from the user and storing it in the variable `inputString` */
process.stdin.on('end', () => {
    inputString = inputString.split('\n')
    main()
})


/**
 * It reads a line from the input string and returns it
 */
const readLine = () => inputString[currentLine++]


/*
 * Complete the `compareTriplets` function below
 * The function is expected to return an INTEGER_ARRAY
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */


/**
 * Given two arrays of integers, return an array of two integers where the first element is the number
 * of elements in the first array that are greater than the corresponding element in the second array
 * and the second element is the number of elements in the second array that are greater than the
 * corresponding element in the first array
 * @param a - an array of integers representing Alice's challenge rating
 * @param b - an array of integers representing Alice's challenge rating
 * @returns An array of two integers.
 */
const compareTriplets = (a, b) => {
    let points =  [0, 0]

    let maxLen = (a.length > b.length) ? a.length : b.length
    for (let i = 0; i <= maxLen; i++) {
        if (a[i] > b[i] && (1 <= a[i] <= 100 && 1 <= b[i] <= 100)) points[0] += 1
        else if (a[i] < b[i] && (1 <= a[i] <= 100 && 1 <= b[i] <= 100)) points[1] += 1
    }

    return points
}


/**
 * Compare two arrays and return the sum of the differences between the two arrays
 */
const main = () => {
    const ws = fs.createWriteStream('./output.txt')

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10))

    const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10))

    const result = compareTriplets(a, b)

    ws.write(result.join(' ') + '\n')

    ws.end()
}