const db = require('../db/connection')

const Bills = {}

Bills.all = bill => {
    return db.any(
        "SELECT * FROM bills"
    )
}

Bills.findById = id => {
    return db.one(
        "SELECT * FROM bills WHERE id = $<id>", {id: id}
    )
} 

Bills.create = bill => {
    return db.one(
        "INSERT INTO bills (people_id, rent, electric, car, insurance, food, other) VALUES ($<person_id>, $<rent>, $<electric>, $<car>, $<insurance>, $<food>, $<other>) RETURNING *",
        bill
    )
}

module.exports = Bills