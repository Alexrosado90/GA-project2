const db = require('../db/connection')

const Bills = {}

Bills.all = post => {
    return db.any(
        "SELECT * FROM bills"
    )
}

Bills.findById = id => {
    return db.one(
        "SELECT * FROM bills WHERE id = $<id>", {id: id}
    )
} 

module.exports = Bills