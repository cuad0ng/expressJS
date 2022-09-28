const { mygroup } = require('../models/Student')

class HomeController {
    // /
    index(req, res) {
        console.log(req.method, req.originalUrl)
        res.status(200).json(mygroup)
    }
}
module.exports = new HomeController