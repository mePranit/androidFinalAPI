var mongoose1 = require('mongoose')


mongoose1.connect('mongodb://127.0.0.1:27017/liveshowtickets', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
