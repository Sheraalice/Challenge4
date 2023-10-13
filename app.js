const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use('/api/v1', require('./routes'))
app.use((err, req, res, next) => {
    return res.status(400).json({
        status: false,
        message: err.message,
        data:null
    });
});

app.use((req, res) => {
    return res.status(400).json({
        status: false,
        message: 'Page not found',
        data: null
    });
});

app.listen(port,() => {
    console.log('Server is running')
})

