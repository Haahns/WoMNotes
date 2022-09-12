
// Vi måste importera express-modulen för att skapa en express-app
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3030

/

app.get('/', (req, res) => {
    res.send(`Express says hello! ${res.locals.myVariable}`)
})


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})