const express = require('express')
const app = express()
const array_sort = require("./lib/array-sort")
const conditional = require("./lib/conditional")

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    return res.send(`Welcome to the beginning of nothingness`)
})

app.get("/nama", (req, res) => {
    let colors = ["Adi", "Beny", "Candil", "Dody"]
    console.log("Before ", colors)

    let result = array_sort.ascending_sort(colors)
    console.log("After ", result)

    return res.send(result)
})

app.listen(3300, () => {
    console.log(`Example app listening on port 3300`)
})