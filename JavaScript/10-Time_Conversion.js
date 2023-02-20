/**
 * Created on Fri Apr 29 2022
 * 
 * @author Carlos Páez
 */
'use strict'

const fs = require('fs')

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
 * It reads a line from the input string and increments the current line counter
 */
const readLine = () => {
    return inputString[currentLine++]
}


/**
 * If the time is PM, add 12 to the hours if it's not 12, otherwise return the time. If the time is AM,
 * return 00:minutes:seconds if it's 12, otherwise return the time.
 * @param s - a string representing time in  hour format
 * @returns The time in 24 hour format.
 */
const timeConversion = (s) => {
    const input = s.split(RegExp('[a-zA-Z]'))
    const time = input[0].split(':')
    const ampm = s[s.length - 2]
    const hours = time[0]
    const minutes = time[1]
    const seconds = time[2]

    if (ampm === 'P') {
        if (hours === '12') {
            return `${hours}:${minutes}:${seconds}`
        } else {
            return `${parseInt(hours) + 12}:${minutes}:${seconds}`
        }
    } else {
        if (hours === '12') {
            return `00:${minutes}:${seconds}`
        } else {
            return `${hours}:${minutes}:${seconds}`
        }
    }
}


/**
 * It creates a write stream to a file called output.txt, reads the first line of the input file,
 * passes that line to the timeConversion function, and writes the result to the output file.
 */
const main = () => {
    const ws = fs.createWriteStream('./output.txt')

    const s = readLine()

    const result = timeConversion(s)

    ws.write(result + '\n')

    ws.end()
}