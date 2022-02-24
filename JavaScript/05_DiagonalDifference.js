/**
 * Created on Thu Feb 24 2022
 * @author Carlos Páez
 */
'use strict'

const fs = require('fs')

process.stdin.resume()
process.stdin.setEncoding('utf-8')


let inputString = ''
let currentLine = 0


process.stdin.on('data', (inputStdin) => {
    inputString += inputStdin
})


process.stdin.on('end', () => {
    inputString = inputString.split('\n')
    main()
})


const readLine = () => inputString[currentLine++]


/*
 * Complete the `diagonalDifference` function below
 * 
 * The function is expected to return an INTEGER
 * The function accepts 2D_INTEGER_ARRAY arr as parameter
 */


const diagonalDifference = (arr) => {
    let left_to_right = 0 
    let right_to_left = 0
    let x = 0 
    let y = arr.length - 1

    for (let i = 0; i < arr.length; i++) {
        left_to_right += arr[i][x]
        right_to_left += arr[i][y]
        x++
        y--
    }

    return Math.abs(left_to_right - right_to_left)
}


const main = () => {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH)

    const n = parseInt(readLine().trim(), 10)

    let arr = Array(n)

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/, '').split(' ').map(arrTemp => parseInt(arrTemp, 10))
    }

    const result = diagonalDifference(arr)

    ws.write(result + '\n')

    ws.end()
}