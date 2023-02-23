/**
 * Created on Thu Feb 23 2023
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
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

/**
 * It takes two arrays of integers, and returns the number of integers between the maximum value of the
 * first array and the minimum value of the second array that are evenly divisible by all the values in
 * the first array and evenly divisible by all the values in the second array.
 * @param {number[]} a - an array of integers
 * @param {number[]} b - an array of integers
 * @returns The number of integers that are between the two given arrays.
 */
function getTotalX ( a: number[], b: number[] ): number {
    if ( a.length < 1 || a.length > 10 || b.length < 1 || b.length > 10 ) {
        throw new Error( 'El tamaño de los arreglos debe estar entre 1 y 10.' )
    }

    const maxVal: number = 100
    if ( a.some( ( val ) => val < 1 || val > maxVal ) || b.some( ( val ) => val < 1 || val > maxVal ) ) {
        throw new Error( `Los valores de los arreglos deben estar entre 1 y ${ maxVal }.` )
    }

    const maxA: number = Math.max( ...a )
    const minB: number = Math.min( ...b )

    let count: number = 0

    for ( let i = maxA; i <= minB; i += maxA ) {
        if ( b.every( num => num % i === 0 ) && a.every( num => i % num === 0 ) ) {
            count++
        }
    }

    return count
}

function main () {
    const ws: WriteStream = createWriteStream( process.env[ 'OUTPUT_PATH' ] )

    const firstMultipleInput: string[] = readLine().replace( /\s+$/g, '' ).split( ' ' )

    const n: number = parseInt( firstMultipleInput[ 0 ], 10 )

    const m: number = parseInt( firstMultipleInput[ 1 ], 10 )

    const arr: number[] = readLine().replace( /\s+$/g, '' ).split( ' ' ).map( arrTemp => parseInt( arrTemp, 10 ) )

    const brr: number[] = readLine().replace( /\s+$/g, '' ).split( ' ' ).map( brrTemp => parseInt( brrTemp, 10 ) )

    const total: number = getTotalX( arr, brr )

    ws.write( total + '\n' )

    ws.end()
}
