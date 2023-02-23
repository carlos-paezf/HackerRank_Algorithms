/**
 * Created on Wed Feb 21 2023
 * 
 * @author Carlos Páez
 */
'use strict';

const fs = require('fs')

process.stdin.resume()
process.stdin.setEncoding('utf-8')

let inputString = ''
let currentLine = 0

/* Reading the input from the console. */
process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin
})

/* Reading the input from the console. */
process.stdin.on('end', function () {
    inputString = inputString.split('n')
    main()
})


/**
 * It reads the input string and returns the current line.
 * @returns The current line of the inputString.
 */
function readLine () {
    return inputString[ currentLine++ ]
}


/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

/**
 * It takes two arrays of integers, and returns the number of integers that are evenly divisible by all
 * the integers in the first array, and are also evenly divisible by all the integers in the second
 * array.
 * @param a - an array of integers that are factors of all integers in b
 * @param b - an array of integers
 * @returns The number of integers between two sets of numbers that are divisible by all numbers in the
 * first set and divisible by all numbers in the second set.
 */
function getTotalX (a, b) {
    if (a.length < 1 || a.length > 10 || b.length < 1 || b.length > 10) {
        throw new Error('El tamaño de los arreglos debe estar entre 1 y 10.');
    }

    const maxVal = 100;
    if (a.some((val) => val < 1 || val > maxVal) || b.some((val) => val < 1 || val > maxVal)) {
        throw new Error(`Los valores de los arreglos deben estar entre 1 y ${ maxVal }.`);
    }

    const maxA = Math.max(...a)
    const minB = Math.min(...b)

    let count = 0

    for (let i = maxA; i <= minB; i += maxA) {
        if (b.every(num => num % i === 0) && a.every(num => i % num === 0)) {
            count++
        }
    }

    return count
}

function main () {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[ 0 ], 10);

    const m = parseInt(firstMultipleInput[ 1 ], 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const brr = readLine().replace(/\s+$/g, '').split(' ').map(brrTemp => parseInt(brrTemp, 10));

    const total = getTotalX(arr, brr);

    ws.write(total + '\n');

    ws.end();
}
