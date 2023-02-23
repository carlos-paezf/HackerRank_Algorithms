/**
 * Created on Wed Feb 22 2023
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

/*
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */

/**
 * If the starting positions are equal, or the velocities are equal, or the starting positions are not
 * equal and the velocities are not equal and the difference between the starting positions is
 * divisible by the difference between the velocities, then the kangaroos will meet
 * @param {number} x1 - starting position for kangaroo 1
 * @param {number} v1 - Kangaroo 1's jump distance
 * @param {number} x2 - starting position of kangaroo 2
 * @param {number} v2 - number, x2: number, v1: number, x1: number
 * @returns A string.
 */
function kangaroo ( x1: number, v1: number, x2: number, v2: number ): string {
    const maxLimit: number = 10000

    const invalidCondition: boolean = (
        x1 < 0 || x1 > maxLimit || x2 < 0 || x2 > maxLimit ||
        v1 < 0 || v1 > maxLimit || v2 < 0 || v2 > maxLimit ||
        x1 > x2 || v1 < v2
    )

    if ( invalidCondition ) return 'NO'

    if ( v1 !== v2 && ( x2 - x1 ) % ( v2 - v1 ) === 0 ) return 'YES'

    return 'NO'
}

function main () {
    const ws: WriteStream = createWriteStream( process.env[ 'OUTPUT_PATH' ] )

    const firstMultipleInput: string[] = readLine().replace( /\s+$/g, '' ).split( ' ' )

    const x1: number = parseInt( firstMultipleInput[ 0 ], 10 )

    const v1: number = parseInt( firstMultipleInput[ 1 ], 10 )

    const x2: number = parseInt( firstMultipleInput[ 2 ], 10 )

    const v2: number = parseInt( firstMultipleInput[ 3 ], 10 )

    const result: string = kangaroo( x1, v1, x2, v2 )

    ws.write( result + '\n' )

    ws.end()
}