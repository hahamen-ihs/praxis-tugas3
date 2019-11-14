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
    let nama = ["Ihsan", "Toni", "Adi", "Edi"]
    console.log("Before ", nama)

    let result = array_sort.ascending_sort(nama)
    console.log("After ", result)

    return res.send(result)
})

app.get("/nama2", (req, res) => {
    let nama = ["Ihsan", "Toni", "Adi", "Edi"]
    console.log("Before ", nama)

    let result = array_sort.descending_sort(nama)
    console.log("After ", result)

    return res.send(result)
})

// app.get("/task2", (req, res) => {
//     let colors = ["Red", "Blue", "Yellow", "Green"]
//     console.log("Before ", colors)

//     let result = array_sort.descending_sort(colors)
//     console.log("After ", result)

//     return res.send(result)
// })


app.listen(3300, () => {
    console.log(`Example app listening on port 3300`)
})