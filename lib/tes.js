const express = require('express')
const app = express()
const array_sort = require("./lib/array-sort")
const conditional = require("./lib/conditional")

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.post('/', (req, res) => {
    let nama = "Ihsan"
    let email = "todayspirit@gmail.com"
    return res.send(`Percobaab tugas ke 2 dari hari ke 4 Ihsan`)
})


app.post("/query", (req, res) => {
    let q = req.body.q
    let z = req.body.z
    
    let result = conditional.equal(q)
    return res.send(result)
})


app.listen(3300, () => {
    console.log(`Example app listening on port 3300`)
})