const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const People = require('./models/people')
const Bills = require('./models/bills')
const moment = require('moment')
const methodOverride = require('method-override')

app.use(bodyParser.urlencoded({ extended: true }))

app.use(methodOverride('_method'))

app.set('view engine', 'ejs')

app.use('/public', express.static('public'))

app.listen(port, function(){
  console.log(`Listening on port ${port}`)
});

app.get('/', (req, res) => {
    People.all()
    .then(person => {
        res.render('homepage', {person: person})
    })
})