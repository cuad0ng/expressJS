const { mygroup, friends } = require('../models/Student')

class StudentController {
    // /19110436
    index(req, res) {
        console.log(req.method, req.originalUrl)
        res.status(404).send('Not valid')
    }
    // /19110436/<id>
    showPost(req, res) {
        console.log(req.method, req.originalUrl)
        const student = mygroup.find(i => i.id === req.params.id)
        const friend = friends.find(i => i.id === req.params.id)
        if (friend !== undefined && student === undefined) {
            mygroup.push(friend)
            res.status(200).send('Success')
        } else {
            res.status(404).send('Not valid')
        }
    }

    showGet(req, res) {
        console.log(req.method, req.originalUrl)
        console.log(req.params.id)
        const student = mygroup.find(i => i.id === req.params.id)
        if (student !== undefined) {
            res.status(200).json(student)
        } else {
            res.status(404).json({ error: 'not valid' })
        }
    }
}

module.exports = new StudentController