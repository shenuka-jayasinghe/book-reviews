const db = require('../../db/connection')
const { cleanGenres } = require('../../utils/cleanGenres')

exports.getBooksdB = () => {
    return db.query(`
    SELECT my_bookshop.book_id,
    (ARRAY_AGG(title))[1] AS title,
    (ARRAY_AGG(author))[1] AS author,
    (ARRAY_AGG(book_desc))[1] AS book_desc,
    (ARRAY_AGG(image_path))[1] AS image_path,
    (ARRAY_AGG(genres)) AS genres,
    AVG(rating)::NUMERIC(10,1) AS average_rating,
    ARRAY_AGG(review) AS reviews,
    ARRAY_AGG(rating) AS ratings
    FROM book_reviews
 FULL OUTER JOIN my_bookshop ON book_reviews.book_id = my_bookshop.book_id
 FULL OUTER JOIN reviews ON book_reviews.review_id = reviews.id
 FULL OUTER JOIN authors ON my_bookshop.author_id = authors.id
 JOIN book_genres ON book_genres.book_id = my_bookshop.book_id
 JOIN genres ON book_genres.genre_id = genres.id
 GROUP BY my_bookshop.book_id 
 ORDER BY my_bookshop.book_id
 LIMIT 8;
    `).then(({rows})=>{
        return cleanGenres(rows)
    })
}

exports.getBookByIdDb = (id) => {
    return db.query(`
    SELECT my_bookshop.book_id,
    (ARRAY_AGG(title))[1] AS title,
    (ARRAY_AGG(author))[1] AS author,
    (ARRAY_AGG(book_desc))[1] AS book_desc,
    (ARRAY_AGG(image_path))[1] AS image_path,
    (ARRAY_AGG(genres)) AS genres,
    AVG(rating)::NUMERIC(10,1) AS average_rating,
    ARRAY_AGG(review) AS reviews,
    ARRAY_AGG(rating) AS ratings
    FROM book_reviews
 FULL OUTER JOIN my_bookshop ON book_reviews.book_id = my_bookshop.book_id
 FULL OUTER JOIN reviews ON book_reviews.review_id = reviews.id
 FULL OUTER JOIN authors ON my_bookshop.author_id = authors.id
 JOIN book_genres ON book_genres.book_id = my_bookshop.book_id
 JOIN genres ON book_genres.genre_id = genres.id
 WHERE my_bookshop.book_id = $1
 GROUP BY my_bookshop.book_id;
    `, [id]).then(({rows})=>{
        return cleanGenres(rows)
    })
}