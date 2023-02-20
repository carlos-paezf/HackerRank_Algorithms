/**
 * Created on Tue Mar 01 2022
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
 * It reads the next line of input and increments the current line counter
 */
const readLine = () => inputString[currentLine++]


/*
 * Complete the `staircase` function below
 *
 * The function accepts INTEGER n as parameter
 */


/**
 * Prints a staircase of n steps.
 * @param n - the number of steps in the staircase
 */
const staircase = (n) => {
    let spaces = n - 1
    let symbols = 1

    if (0 < n && n <= 100) {
        for (let i = 0; i < n; i++) {
            console.log(`${' '.repeat(spaces)}${'#'.repeat(symbols)}`)
            spaces -= 1
            symbols += 1
        }
    }
}


/**
 * Prints a staircase of size n
 */
const main = () => {
    const n = parseInt(readLine().trim(), 10)

    staircase(n)
}