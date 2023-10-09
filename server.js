// const http = require('http');
// const port = 1122;

// http.createServer(function(req, res) {
//     res.write(`Hello World`);
//     res.end
// }).listen(port)

// console.log(`Node.js web server at port ${port} is running`)


const express = require('express')
const path = require('path')
const app = express()

const appRouting = require('./routers/app-route')
const exp = require('constants')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('/assets', express.static(path.join(__dirname, 'assets')))

app.use('/', appRouting)

app.listen(8089, () => {
    console.log('app is running')
})

module.exports=app