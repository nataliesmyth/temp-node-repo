const { readFile, writeFile } = require('fs')

console.log('start')

readFile('./content/first.txt', 'utf8',
// callback function
(err, result) => {
    if (err) {
        console.log(err)
        return
    }
    // console.log(result)
    // functionality goes here
    // the only way to access the result as a call back function is inside this callback funcction
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        writeFile(
            './content/result-async.txt',
            `Here is the result: ${first}, ${second}`,
            (err, result) => {
                // if you are looking for a result, you'd find it here (callbacks)
                if (err) {
                    console.log(err)
                    return
                }
                console.log('done with this task')
            }
        )
    })
})

console.log('starting next task')