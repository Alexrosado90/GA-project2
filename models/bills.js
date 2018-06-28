const db = require('../db/connection')

const Bills = {}

Bills.all = post => {
    return db.any(
        "SELECT * FROM bills"
    )
}

module.exports = Bills