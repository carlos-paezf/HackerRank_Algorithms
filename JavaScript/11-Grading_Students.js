/**
 * Created on Mon Feb 20 2023
 * 
 * @author Carlos Páez
 */
'use strict';

const fs = require('fs')

process.stdin.resume()
process.stdin.setEncoding('utf-8')

let inputString = ''
let currentLine = 0

/* Reading the input from the console. */
process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin
})

/* Reading the input from the console. */
process.stdin.on('end', function () {
    inputString = inputString.split('n')
    main()
})


/**
 * It reads the input string and returns the current line.
 * @returns The current line of the inputString.
 */
function readLine () {
    return inputString[ currentLine++ ]
}


/**
 * Complete the `gradingStudents` function below
 * 
 * The function is expected to return an INTEGER_ARRAY
 * The function accepts INTEGER_ARRAY grades a parameter
 */

/**
 * Round up to the next multiple of 5.
 * @param number - The number to round up.
 */
const _roundUpToNextMultiple5 = (number) => 5 * Math.ceil(number / 5)

/**
 * If the grade is greater than or equal to 38 and the difference between the grade and the next
 * multiple of 5 is less than 3, then return the next multiple of 5, otherwise return the grade.
 * @param grades - an array of integers representing grades before rounding
 * @returns An array of rounded grades.
 */
function gradingStudents (grades) {
    return grades.map((grade) => {
        return (grade >= 38 && (_roundUpToNextMultiple5(grade) - grade) < 3)
            ? _roundUpToNextMultiple5(grade)
            : grade
    })
}

function main () {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH)

    const gradesCount = parseInt(readLine().trim(), 10)

    let grades = []

    for (let i = 0; i < gradesCount; i++) {
        const gradesItem = parseInt(readLine().trim(), 10)
        grades.push(gradesItem)
    }

    const result = gradingStudents(grades)

    ws.write(result.join('\n') + '\n')

    ws.end()
}