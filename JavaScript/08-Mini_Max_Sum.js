/**
 * Created on Thu Mar 10 2022
 * 
 * @author Carlos Páez
 */
'use strict'

// process.stdin.resume()
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
const readLine = () => inputString[currentLine++]


/**
 * Complete the `miniMaxSum` function below
 * 
 * The functions accepts INTEGER_ARRAY arr as parameter
 */

/**
 * Given an array of integers, return the sum of the smallest and largest integers in the array
 * @param [arr] - an array of integers
 */
const miniMaxSum = (arr = []) => {
    let arr_sort = arr.sort()

    let mini = 0
    let max = 0
    let x = 0
    let y = arr_sort.length - 1

    for (let i = 0; i < arr_sort.length - 1; i++) {
        if (1 <= arr_sort[i] && arr_sort[i] <= Math.pow(10, 9)) {
            mini += arr_sort[x]
            max += arr_sort[y]
            x++
            y--
        }
    }

    console.log(`${mini} ${max}`)
}


/**
 * Given an array of integers, find the minimum and maximum values, and print the respective sums of
 * those values
 */
const main = () => {
    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10))
    miniMaxSum(arr)
}