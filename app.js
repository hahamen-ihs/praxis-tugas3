const express = require('express')
const app = express()
const array_sort = require("./lib/array-sort")
const conditional = require("./lib/conditional")

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    return res.send(`Percobaan tugas ke 2 dari hari ke 4 Ihsan`)
})

/**
 * How to using query parameter:
 * 
 * http://your_url:your_port/your_route?q=your_value
 * or type in Query Params when using postman
 * key      | value
 * q        | your_value
 */
app.post("/query", (req, res) => {
    let q = req.body.q
    let z = req.body.z
    
    let result = conditional.equal(q)
    return res.send(result)
})

//let result = conditional.equal(q) satu parameter
//di post man value nya si key nya harus antar good atau bisa diganti
//di conditional.js di bagian input


app.listen(3300, () => {
    console.log(`Example app listening on port 3300`)
})