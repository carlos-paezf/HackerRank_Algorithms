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
 * Complete the `kangaroo` function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */

/**
 * If the kangaroos are not moving at the same speed, and the distance between them is divisible by the
 * difference in their speeds, then they will meet
 * @param x1 - starting position for kangaroo 1
 * @param v1 - Kangaroo 1's jump distance (in meters)
 * @param x2 - starting position of kangaroo 2
 * @param v2 - the speed of the second kangaroo
 * @returns a string.
 */
function kangaroo (x1, v1, x2, v2) {
    const maxLimit = 10000

    const invalidCondition = (
        x1 < 0 || x1 > maxLimit || x2 < 0 || x2 > maxLimit ||
        v1 < 0 || v1 > maxLimit || v2 < 0 || v2 > maxLimit ||
        x1 > x2 || v1 < v2
    )

    if (invalidCondition) return 'NO'

    if (v1 !== v2 && (x2 - x1) % (v2 - v1) === 0) return 'YES'

    return 'NO'
}

function main () {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const x1 = parseInt(firstMultipleInput[ 0 ], 10);

    const v1 = parseInt(firstMultipleInput[ 1 ], 10);

    const x2 = parseInt(firstMultipleInput[ 2 ], 10);

    const v2 = parseInt(firstMultipleInput[ 3 ], 10);

    const result = kangaroo(x1, v1, x2, v2);

    ws.write(result + '\n');

    ws.end();
}