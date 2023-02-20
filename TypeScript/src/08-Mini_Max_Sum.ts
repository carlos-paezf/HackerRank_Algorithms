/**
 * Created on Mon Apr 18 2022
 * 
 * @author Carlos Páez
 */
'use strict'

process.stdin.setEncoding('utf-8')


let inputString: string = ''
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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr: number[]): void {
    arr.sort()

    let min: number = 0
    let max: number = 0

    let x = 0
    let y = arr.length - 1

    for (let i = 0; i < arr.length - 1; i++) {
        if (1 <= arr[i] && arr[i] <= Math.pow(10, 9)) {
            min += arr[x]
            max += arr[y]
            x++
            y--
        }
    }

    console.log(`${min} ${max}`)
}

function main() {

    const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}