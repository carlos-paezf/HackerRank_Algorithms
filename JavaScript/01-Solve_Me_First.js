/**
 * Created on Fri Feb 18 2022
 * @author Carlos Páez
 */


process.stdin.resume()
process.stdin.setEncoding('ascii')


let input_stdin = ''
let input_stdin_array = ''
let input_current_line = 0


/* Listening to the data that is being sent to the process.stdin. */
process.stdin.on('data', (data) => {
    input_stdin += data
})


/* Listening to the data that is being sent to the process.stdin. */
process.stdin.on('end', () => {
    input_stdin_array = input_stdin.split('\n')
    main()
})


/**
 * Reads the next line from stdin and returns it
 * @returns The return value is a string.
 */
const readLine = () => {
    return input_stdin_array[input_current_line++]
}


/**
 * It adds two numbers
 * @param a - the first number
 * @param b - the second number
 * @returns The sum of the two numbers.
 */
const solveMeFirst = (a, b) => {
    if (1 <= a && b <= 1000) {
        return a + b
    }
    return '1 <= a, b <= 1000'
}


/**
 * It adds two numbers.
 */
const main = () => {
    let a = parseInt(readLine())
    let b = parseInt(readLine())

    let res = solveMeFirst(a, b)

    console.log(res)
}