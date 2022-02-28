/**
 * Created on Mon Feb 28 2022
 * 
 * @author Carlos Páez
 */
'use strict'

process.stdin.resume()
process.stdin.setEncoding('utf-8')


let inputString: string = ''
let inputLines: string[] = []
let currentLine: number = 0


/* Reading the input from the user and storing it in the variable `inputString` */
process.stdin.on('data', (inputStdin: string) => {
    inputString += inputStdin
})


/* Reading the input from the user and storing it in the variable `inputString` */
process.stdin.on('end', () => {
    inputLines = inputString.split('\n')
    inputString = ''
    main()
})


/**
 * It reads the next line from the inputLines array and increments the currentLine variable
 */
const readLine = (): string => inputLines[currentLine++]


/*
 * Complete the `plusMinus` function below
 *
 * The function accepts INTEGER_ARRAY arr as parameter
 */


/**
 * Given an array of integers, calculate the ratios of positive, negative, and zero values in the array
 * @param {number} n - number of integers in the array
 * @param {number[]} arr - an array of integers
 */
const plusMinus = (n: number, arr: number[]): void => {
    let pos: number = 0
    let neg: number = 0
    let zero: number = 0

    if (0 < n && n <= 100) {
        pos = arr.filter((e: number) => (-100 <= e && e <= 100 && e > 0)).length
        neg = arr.filter((e: number) => (-100 <= e && e <= 100 && e < 0)).length
        zero = arr.filter((e: number) => (-100 <= e && e <= 100 && e == 0)).length
    }

    let ratio_pos = (pos / n).toFixed(6)
    let ratio_neg = (neg / n).toFixed(6)
    let ratio_zero = (zero / n).toFixed(6)

    console.log(ratio_pos)
    console.log(ratio_neg)
    console.log(ratio_zero)
}


/**
 * Print the decimal value of the fraction of positive, negative and zero elements in an array
 */
const main = (): void => {
    const n: number = parseInt(readLine().trim(), 10)
    
    const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10))

    plusMinus(n, arr)
}