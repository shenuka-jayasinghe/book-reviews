# Book review app using PostgreSQL | Express | Sveltekit | NodeJS

This app was written for demonstration purposes only, to highlight my skills as a full-stack engineer.

This app is deployed on render.com: https://cultured-front-end.onrender.com/

Please allow for about 40s for the site to load as it is client-side rendred, and the server it is hosted on shuts down if not used in 15 minutes if not used.

## Design

Design wireframes were inspired by Ahwini Kalmane R. <breaK>
You can find more on her design case study here: https://uxdesign.cc/designing-a-system-for-book-reviews-a-ux-case-study-e8a85dd13c1d
![ezgif-3-ea5274843b](https://github.com/shenuka-jayasinghe/book-reviews/assets/137282472/8d446b0d-05be-4c19-880b-4501a0c40f7d)



## Frontend - Sveltekit

1. Book Catalog: Browse through a short list of books.
2. Book Details: Access detailed information about each book, including the title, author, and synopsis.
3. User Reviews: Read and submit reviews for your favorite books.
4. Responsive Design: Enjoy a seamless experience on various devices, ensuring a consistent and engaging interface.

![Screenshot from 2023-12-30 20-02-46](https://github.com/shenuka-jayasinghe/book-reviews/assets/137282472/590cd74c-12fd-4c97-a7db-19b7afc1bf6b)
![Screenshot from 2023-12-30 20-02-34](https://github.com/shenuka-jayasinghe/book-reviews/assets/137282472/4c28325e-6535-4f6d-b715-193453df5d9e)
![Screenshot from 2023-12-30 20-02-39](https://github.com/shenuka-jayasinghe/book-reviews/assets/137282472/3df7393e-9fd9-491e-8e2f-5d05009bfe2e)
![Screenshot from 2023-12-30 20-03-01](https://github.com/shenuka-jayasinghe/book-reviews/assets/137282472/d486eaee-c1f0-4341-bda5-df00665fb80d)
![Screenshot from 2023-12-30 20-03-09](https://github.com/shenuka-jayasinghe/book-reviews/assets/137282472/3fae4a2d-6284-437c-8bd0-a22828872b23)
![Screenshot from 2023-12-30 20-03-19](https://github.com/shenuka-jayasinghe/book-reviews/assets/137282472/51e93393-552e-4ca6-946e-a2952e661497)
![Screenshot from 2023-12-30 20-03-34](https://github.com/shenuka-jayasinghe/book-reviews/assets/137282472/f1c3dd99-3fbc-46a5-aeae-377ad330771d)
![Screenshot from 2023-12-30 20-03-47](https://github.com/shenuka-jayasinghe/book-reviews/assets/137282472/b8b5133e-0a24-4e92-a97b-30b1105d54ec)

## Backend - Node and Express

Model (book.model.js):

The model handles interactions with the database.
Functions like getBooksdB, getBookByIdDb, and postBookReviewsDb are responsible for database operations related to books.
Controller (book.controller.js):

The controller acts as an intermediary between the model and the routes.
Functions like getBooks, getBookbyId, and postBookReviews represent different actions or endpoints.
They call corresponding functions from the model to fetch or manipulate data and then send the appropriate response.
Routes (app.js):

The routes define the API endpoints and specify which controller function should handle each endpoint.
The express application uses routes like /api/book, /api/book/:id, and /api/healthcheck.
Each route corresponds to a specific controller function (getBooks, getBookbyId, postBookReviews).
Express Middleware:

Middleware functions like express.json() and cors() are applied to the entire application. They handle JSON parsing and enable Cross-Origin Resource Sharing (CORS).
