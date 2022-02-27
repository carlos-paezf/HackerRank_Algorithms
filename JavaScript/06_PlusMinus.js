/**
 * Created on Sun Feb 27 2022
 * 
 * @author Carlos Páez
 */
'use strict'

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
 * It reads a line from the input string and increments the current line counter
 */
const readLine = () => inputString[currentLine++]


/*
 * Complete the `plusMinus` function below
 * 
 * The function accepts INTEGER_ARRAY arr as parameter
 */


/**
 * Given an array of integers, calculate the ratios of positive, negative, and zero values in the array
 * @param n - the size of the array
 * @param arr - an array of integers
 */
const plusMinus = (n, arr) => {
    let pos = 0
    let neg = 0
    let zero = 0

    if (0 < n && n <= 100) {
        arr.map(i => {
            if (-100 <= i && i <= 100) {
                pos += (i > 0) ? 1 : 0
                neg += (i < 0) ? 1 : 0
                zero += (i == 0) ? 1 : 0
            }
        })
    }

    let ratio_pos = pos / n
    let ratio_neg = neg / n
    let ratio_zero = zero / n

    console.log(ratio_pos.toFixed(6))
    console.log(ratio_neg.toFixed(6))
    console.log(ratio_zero.toFixed(6))
}


/**
 * Print the ratio of positive, negative, and zero items in the array
 */
const main = () => {
    const n = parseInt(readLine().trim(), 10)

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10))

    plusMinus(n, arr)
}