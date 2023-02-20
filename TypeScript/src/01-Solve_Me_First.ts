/**
 * Created on Fri Feb 18 2022
 * @author Carlos Páez
 */

'use strict'

process.stdin.resume()
process.stdin.setEncoding('utf-8')


let inputString: string = ''
let inputLines: string[] = []
let currentLine: number = 0


process.stdin.on('data', (inputStdin: string): void => {
    inputString += inputStdin
})


process.stdin.on('end', (): void => {
    inputLines = inputString.split('\n')
    inputString = ''
    main()
})


/**
 * Reads the next line from stdin and returns it
 * @returns The return value is a string.
 */
const readLine = () => {
    return inputLines[currentLine++]
}


/**
 * It adds two numbers
 * @param {number} a - the first number
 * @param {number} b - the first number
 * @returns The sum of the two numbers.
 */
const solveMeFirst = (a: number, b: number): number | string => {
    if (1 <= a && b <= 1000) return a + b
    return '1 <= a, b <= 1000'
}


/**
 * It adds two numbers
 */
const main = () => {
    let a = parseInt(readLine())
    let b = parseInt(readLine())

    let res = solveMeFirst(a, b)

    console.log(res)
}