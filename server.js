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

//app.get('/people/show', (req, res) => {
    //People.all()
    //.then(person => {
        //res.render('people/show', {person: person})
    //})
//})

app.get('/bills/new', (req, res) => {
    Bills.all()
    .then(bill => {
        res.render('bills/new', {bill: bill})
    })
})

app.get('/bills/:id/edit', (req, res) => {
    const id = Number(req.params.id)
    Promise.all([
        Bills.findById(id)
        .then(bill => {
            return bill
        }),
        People.all()
        .then(person => {
            return person
        })
    ])
    .then(([person, bill]) => {
        res.render('bills/edit', {bill: bill, person: person})
    })

})