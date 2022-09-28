const studentRouter = require('./student')
const messageRouter = require('./message')
const homeRouter = require('./home')
function route(app) {
    app.use('/19110436', studentRouter)
    app.use('/message', messageRouter)
    app.use('/', homeRouter)
}

module.exports = route