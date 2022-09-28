const { mygroup } = require('../models/Student')

class MessageController {
    // /message
    index(req, res) {
        console.log(req.method, req.originalUrl)
        let names = "";
        mygroup.forEach(student => names += `<li>${student.name}</li>`)
        res.status(200).send(`<html><body><ul>${names}</ul></body></html>`)
    }
    // /message/:id
    show(req, res) {
        console.log(req.method, req.originalUrl)
        const student = mygroup.find(i => i.id === req.params.id)
        if (student !== undefined) {
            res.status(200).send(`<html><body><ul><li>${student.name}</li></ul></body></html>`)
        } else {
            res.status(404).send('Not valid')
        }
    }
}
module.exports = new MessageController