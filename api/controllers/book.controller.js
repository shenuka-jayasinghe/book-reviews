const { getBooksdB, getBookByIdDb } = require("../models/book.model")

exports.getBooks = (req, res) => {
    getBooksdB().then( result =>{
        res.status(200).send(result)
    })
}

exports.getBookbyId = (req, res) => {
    const {id} = req.params
    getBookByIdDb(id).then( result => {
        res.status(200).send(result[0])
    })
}