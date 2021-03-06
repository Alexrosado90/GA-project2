require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 4567
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
    Promise.all([
    People.all()
    .then(person => {
    return person
    }),
    Bills.all()
    .then(bill => {
        return bill
    })
    ])
    .then(([person, bill]) => {
        res.render('homepage', {person: person, bill: bill})
    })
})

app.get('/bills/new', (req, res) => {
    Bills.all()
    .then(bill => {
        res.render('bills/new', {bill: bill})
    })
})

app.get('/bills/:id', (req, res) => {
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
    .then(([bill, person]) => {
        res.render('bills/show', {bill: bill, person: person})
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
    .then(([bill, person]) => {
    
        res.render('bills/edit', {bill: bill, person: person})
    })
})

app.post('/bills', (req, res) => {
    const newBill = req.body
    Bills.create(newBill).then(bill => {
        res.redirect(302, `/`)
    })
})

app.put('/bills/:id', (req,res) => {
    const updatedBill = req.body
    const id = Number(req.params.id)
    updatedBill.id = id
    Bills.update(updatedBill).then(bill => {
        // res.redirect(302, `/bills/${bill.id}`)
        res.redirect(302, `/`)
    })
})

app.delete('/bills/:id', (req,res) => {
    const id = Number(req.params.id)
    Bills.delete(id).then(bill => {
        res.redirect(302, '/')
    })
})

