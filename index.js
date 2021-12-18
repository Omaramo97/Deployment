const express = require ('express')
const path = require('path/posix')
const app = express()
const PORT = 4040

app.get('/index.js',(req,res) =>{
    res.sendFile(path.join(__dirname, './index.js'))
})

app.use('/index.js',express.static(path.join(__dirname, 'index.js')))

app.listen(PORT, () => {
    console.log(`App listening to ${PORT}`)
})