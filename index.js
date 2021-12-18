const express = require ('express')
const app = express()
const PORT = 4040

app.listen(PORT, () => {
    console.log(`App listening to ${PORT}`)
})