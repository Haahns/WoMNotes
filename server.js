
// Vi måste importera express-modulen för att skapa en express-app
const express = require('express')
const mongoose  = require('mongoose')
const app = express()
const PORT = process.env.PORT || 3030

//importera dotenv och läs in .env-filen
require('dotenv').config()
console.log(process.env.HEMLIS)

app.use(express.json())
//använd en variablem ur .env-filen
console.log(process.env.DB_URL)

//skapa och öppna mongoose-connection till Mongo DB appen
mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on('error', (error) =>  console.log(error))
db.on('open', () =>  console.log("Connected to DB!"))


app.get('/', (req, res) => {
    res.send({msg: `Express says hello!`})
})
const notesRouter = require('./routes/notes')
app.use('/notes', notesRouter)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})