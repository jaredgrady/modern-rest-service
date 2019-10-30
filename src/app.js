const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bunyan = require('bunyan');
const compression = require('compression')
const helmet = require('helmet')
const port = 8080

// Setup logging
const logger = bunyan.createLogger({name: process.title});

// Setup our Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(compression())
app.use(helmet())
app.set('trust proxy', 1) // trust first proxy

// Setup our Routes
app.get('/', (req, res) => {
    logger.info(`200 ${req.method} ${req.path} ${req.header('user-agent')}`)
    res.send('Hello World!')
})

// Listen for traffic!
app.listen(port, () => console.log(`Example app listening on port ${port}!`))