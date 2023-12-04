<script>
// @ts-nocheck

import { onMount } from 'svelte';
  import Head from '$lib/ReviewHead/Head.svelte';
  import Tab from '$lib/Tab/Tab.svelte';
  import { page } from '$app/stores';
  


	const bookId = $page.params.bookId;
	/**
	 * @type {{ title: any; }}
	 */
	let library = [];
	let titles = []; 
	let bookIds = [];
    let image_paths = []; 
    let cardRatings = [];
    let numberOfRatings = [];
    let descriptions = []; 
    let authors = []; 
	let ratings = [];
	let post;
	let fetchBook = () => {return fetch(`https://book-review-api.onrender.com/api/book/${bookId}`)}
	let fetchLibrary = () => {return fetch(`https://book-review-api.onrender.com/api/book`)}
	// let fetchLibrary = fetch()
	onMount(() => {
    Promise.all([fetchBook(), fetchLibrary()])
      .then(([response, response2]) => {
        return Promise.all([response.json(), response2.json()]);
      })
      .then(([bookResult, libraryResult]) => {
        post = bookResult;
		library = libraryResult;

		const filteredBooks = library.filter( book => {
			return book.book_id !== +bookId
		})


		titles = filteredBooks.map( book => book.title)
		bookIds = filteredBooks.map( book => book.book_id)
		authors = filteredBooks.map( book => book.author)
		image_paths = filteredBooks.map( book => book.image_path)
		cardRatings = filteredBooks.map( book => book.average_rating)
		numberOfRatings = filteredBooks.map( book => book.ratings.length)
		descriptions = filteredBooks.map( book => `${book.book_desc.slice(0,100)}...`)

		
		

        // handle libraryResult if needed
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  });
</script>
{#if post && library}

<div class="my-[30px] mx-[10%]">
	<Head 
	imagePath = {post.image_path}
	lastCrumb = {post.title} 
	title = {post.title}
	author = {post.author}
	cardRating = {post.average_rating}
	numberOfRatings = {post.ratings.length}
	price = {post.price_in_pence}
	{bookId}
	/>

</div>
<div class="my-[30px] mx-[10%]">
	<Tab
	info = {post.book_desc}
	{bookIds}
	{titles}
	{authors}
	{image_paths}
	{cardRatings}
	{numberOfRatings}
	ratings = {post.ratings}
	reviewRatings = {post.ratings}
	reviews = {post.reviews}

	 />

</div>
{/if}
