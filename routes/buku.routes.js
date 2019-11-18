const express   = require('express')
const router    = express.Router()
const bookmodel = ('../models/book.model')


router.post('/create',async (req, res) => {
    let {id_buku, judul, penulis,thn_terbit,penerbit} = req.body 
    let input_data = {
        id_buku, judul, penulis,thn_terbit,penerbit
    }

    let data = new bukumodel(input_data)
    data.save()

    return res.send({
        
    })

})

module.exports = router