let mongoose    = require("mongoose")
var host        = "monggodb://localhost:27017/day6"

mongoose.connect(host,{
        'useNewUrlParser' : true
})

mongoose.set('useCreateIndex', true)