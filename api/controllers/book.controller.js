const { getBooksdB } = require("../models/book.model")

exports.getBooks = (req, res) => {
    getBooksdB().then( result =>{
        res.status(200).send(result)
    })
}