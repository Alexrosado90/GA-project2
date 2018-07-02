# Budget Manager!

## Project 2-CRUD APP

This project has people and bills tables.

## People
- name
- age
- estimate monthly income

## Bills

- rent
- electric
- car
- insurance
- food
- other
- person_id

## Technologies used

`npm init`

`npm install --save express`

Node Modules:
- `bluebird`
- `pg-promise`
- `ejs`
- `monitor`
- `moment`
- 'method-override'

## Personal achievment

app.put('/bills/:id', (req,res) => {
    const updatedBill = req.body
    const id = Number(req.params.id)
    updatedBill.id = id
    Bills.update(updatedBill).then(bill => {
        // res.redirect(302, `/bills/${bill.id}`)
        res.redirect(302, `/`)

## Plans for the future

- Multiple usernames
- Total expenses(month and year)
- Small errors fine tuned
- Add a graph per user for the year