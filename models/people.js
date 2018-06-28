const db = require('../db/connection')

const People = {}

People.all = person => {
    return db.any(
        "SELECT * FROM people"
    )
}

People.findById = id => {
    return db.one(
        "SELECT * FROM people WHERE id = $<id>", {id: id}
    )
}

module.exports = People