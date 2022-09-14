const express = require('express')
const router = express.Router()
const Note = require ("../models/note")


router.get('/', async (req, res) => {
    try {
    const notes = await Note.find()
    res.send(notes)
    } catch (error){
    res.status(500).send({ msg: error.message})}
});

router.get('/:id', (req, res) => {
    res.send(notes[req.params.id]);
})


/*router.post('/', (req, res) => {
    notes.push(req.body)
    res.send({sparade: req.body})
})*/
router.post('/',async (req, res) => {
    try {
        const note = new Note ({
            text: req.body.text
        })

        

        res.send({ sparade : note})
    } catch (error){
        res.status(500).send({ msg: error.message})
    }
})
module.exports = router
