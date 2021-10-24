const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const db = require('mysql')

const con = db.createConnection({
    host: 'localhost',
    username: 'root',
    password: '',
    data: 'timeline'
})

con.connect()

const port = process.env.PORT || 8080

const app = express()
    .use(cors())
    .use(bodyParser.json())
    .use(events(con))
