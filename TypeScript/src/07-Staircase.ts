/**
 * Created on Tue Mar 01 2022
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
 * It reads a line from the input file and returns it
 */
const readLine = () => inputLines[currentLine++]


/* 
 * Complete the `staircase` function below
 * 
 * The function accepts an INTEGER n as parameter
 */


/**
 * Prints a staircase of n steps.
 * @param {number} n - number
 */
const staircase = (n: number) => {
    let spaces: number = n - 1
    let symbols: number = 1

    if (0 < n && n <= 100) {
        for (let i: number = 0; i < n; i++) {
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
    const n: number = parseInt(readLine().trim(), 10)

    staircase(n)
}