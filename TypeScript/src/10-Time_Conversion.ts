/**
 * Created on Mon May 01 2022
 * 
 * @author Carlos Páez
 */
'use strict'

import { WriteStream, createWriteStream } from 'fs'


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


const readLine = (): string => {
    return inputLines[currentLine++]
}


/**
 * Complete the `timeConversion` function below.
 * 
 * The function is expected to return a STRING
 * The function accepts STRING s as parameter
 */


/**
 * If the time is AM, return the time as is unless it's 12 AM, in which case return 00:00:00. If the
 * time is PM, return the time plus 12 hours unless it's 12 PM, in which case return 12:00:00
 * @param {string} s - string - the time in 12-hour format
 * @returns A string
 */
const timeConversion = (s: string): string => {
    const ampm: string = s[s.length - 2]
    const time: string[] = s.split(RegExp('[a-zA-Z]'))[0].split(':')
    const hours: string = time[0]
    const minutes: string = time[1]
    const seconds: string = time[2]

    if (ampm.toUpperCase() === 'A') {
        if (hours === '12') {
            return `00:${minutes}:${seconds}`
        } else {
            return `${hours}:${minutes}:${seconds}`
        }
    } else {
        if (hours !== '12') {
            return `${(parseInt(hours) + 12)}:${minutes}:${seconds}`
        } else {
            return `${hours}:${minutes}:${seconds}`
        }
    }
}


/**
 * It reads a line from the input file, passes it to the timeConversion function, and writes the result
 * to the output file
 */
const main = (): void => {
    const ws: WriteStream = createWriteStream('./output.txt')

    const s: string = readLine()

    const result: string = timeConversion(s)

    ws.write(result + '\n')

    ws.end()
}