/**
 * Created on Mon Feb 20 2023
 * 
 * @author Carlos Páez
 */
'use strict'

import { WriteStream, createWriteStream } from "fs"

process.stdin.resume()
process.stdin.setEncoding( 'utf-8' )

let inputString: string = ''
let inputLines: string[] = []
let currentLine: number = 0

/* Reading the input from the console. */
process.stdin.on( 'data', function ( inputStdin: string ): void {
    inputString += inputStdin
} )

/* Reading the input from the console. */
process.stdin.on( 'end', function (): void {
    inputLines = inputString.split( '\n' )
    inputString = ''

    main()
} )

/**
 * It reads a line from the input file and returns it
 * @returns The current line of the inputLines array.
 */
function readLine (): string {
    return inputLines[ currentLine++ ]
}

/**
 * Complete the `gradingStudents` function below
 * 
 * The function is expected to return an INTEGER_ARRAY
 * The function accepts INTEGER_ARRAY grades as parameter
 */

/**
 * Round up to the next multiple of 5.
 * @param {number} number - The number to round up to the next multiple of 5.
 */
const _roundUpToNextMultiple5 = ( number: number ): number => 5 * Math.ceil( number / 5 )

/**
 * If the grade is less than 38, return the grade. Otherwise, return the grade rounded up to the next
 * multiple of 5 if the difference between the grade and the next multiple of 5 is less than 3.
 * @param {number[]} grades - an array of integers representing grades before rounding
 * @returns An array of numbers.
 */
function gradingStudents ( grades: number[] ): number[] {
    return grades.map( grade => {
        const nm5 = _roundUpToNextMultiple5( grade )
        return ( grade >= 38 && ( nm5 - grade ) < 3 )
            ? nm5
            : grade
    } )
}

function main () {
    const ws: WriteStream = createWriteStream( process.env[ 'OUTPUT_PATH' ] )

    const gradesCount: number = parseInt( readLine().trim(), 10 )

    let grades: number[] = []

    for ( let i: number = 0; i < gradesCount; i++ ) {
        const gradesItem: number = parseInt( readLine().trim(), 10 )

        grades.push( gradesItem )
    }

    const result: number[] = gradingStudents( grades )

    ws.write( result.join( '\n' ) + '\n' )

    ws.end()
}