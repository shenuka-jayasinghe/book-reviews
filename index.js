const express = require("express");
const app = express()
const port = 5000
const pool = require("./db")
app.use(express.json())

app.get("/", async (req,res) => {
    try{
        const table = await pool.query('SELECT * FROM reviews', (err, res) => {
            if (err) {
                console.error(err);
              } else {
                console.log(res.rows);
                // Process the retrieved data here
              }
        })
    } 
    catch (err) {
        throw err
    }
})

app.post("/reviews", async (req, res) => {
    try {
        const { review, rating } = req.body
        console.log("posted", review, rating )
        const newReview = await pool.query("INSERT INTO reviews (review, rating) VALUES($1, $2) RETURNING *;", [review, rating]);
        res.json(newReview.rows[0])
        console.log("succes!")
    } 
    catch{}
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})