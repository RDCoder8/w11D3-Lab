const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000

function isFibNum(num) {
    const fibArray = [0, 1]
        if (num === 1 || num === 0) {
            return true
        }
        for (let i = 1; i <= num; i++) {
            let prevNumberOne = fibArray[fibArray.length - 1]
            let prevNumberTwo = fibArray[fibArray.length - 2]
            if (prevNumberOne + prevNumberTwo === i) {
                fibArray.push(i)
            }
        } 
        if (num === fibArray[fibArray.length - 1]) {
            return true
        } else {
            return false
        }
    }
    
    app.get('/fibonacci/:number',  (req, res) => {
    if (isFibNum(Number(req.params.number))) {
        res.send("<h1>You got a fibonacci macaroni!</h1>")
    } else {
        res.send("<h1>Nope, not macaroni.</h1>")
    }
})

app.listen(PORT, () => {
    console.log(`The FBI is listening on port ${PORT}`)
})