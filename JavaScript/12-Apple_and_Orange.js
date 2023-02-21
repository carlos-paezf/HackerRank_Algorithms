/**
 * Created on Mon Feb 20 2023
 * 
 * @author Carlos Páez
 */
'use strict';

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
    inputString = inputString.split('\n')
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
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

/**
 * It takes in a bunch of numbers, and returns the number of apples and oranges that fall on the house
 * @param s - starting point of Sam's house location.
 * @param t - integer, the number of steps that Sam's house is from the tree
 * @param a - starting point of house
 * @param b - the location of the tree on the x-axis
 * @param apples - [-2, 2, 1]
 * @param oranges - [-2, 2, 1]
 * @returns The number of apples and oranges that fall on Sam's house.
 */
function countApplesAndOranges (s, t, a, b, apples, oranges) {
    const minLimit = -1e5
    const maxLimit = 1e5

    for (const param of [ s, t, a, b ]) {
        if (!(1 <= param && param <= maxLimit)) return 'Error'
    }

    let validApples = 0
    let validOranges = 0

    for (const apple of apples) {
        if (minLimit <= apple && apple <= maxLimit) {
            if (s <= (apple + a) && (apple + a) <= t) validApples += 1
        }
    }

    for (const orange of oranges) {
        if (minLimit <= orange && orange <= maxLimit) {
            if (s <= (orange + b) && (orange + b) <= t) validOranges += 1
        }
    }

    console.log(`${ validApples }\n${ validOranges }`)
}


function main () {
    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ')

    const s = parseInt(firstMultipleInput[ 0 ], 10)
    const t = parseInt(firstMultipleInput[ 1 ], 10)

    const secondMultipleInput = readLine().replace(/\s+$/g, '').split(' ')

    const a = parseInt(secondMultipleInput[ 0 ], 10)
    const b = parseInt(secondMultipleInput[ 1 ], 10)

    const thirdMultipleInput = readLine().replace(/\s+$/g, '').split(' ')

    const m = parseInt(thirdMultipleInput[ 0 ], 10)
    const n = parseInt(thirdMultipleInput[ 1 ], 10)

    const apples = readLine().replace(/\s+$/g, '').split(' ').map(applesTemp => parseInt(applesTemp, 10))
    const oranges = readLine().replace(/\s+$/g, '').split(' ').map(orangesTemp => parseInt(orangesTemp, 10))

    countApplesAndOranges(s, t, a, b, apples, oranges)
}