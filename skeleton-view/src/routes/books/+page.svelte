<script>
	import { onMount } from 'svelte';

	// @ts-ignore
	/**
	 * @type {any[]}
	 */
	let posts = [];
	let genres = [];
	onMount(() => {
		fetch('http://localhost:5000/api/book')
			.then((response) => {
				return response.json();
			})
			.then((result) => {
				posts = result;
			});
	});
	import Card from '$lib/Card/Card.svelte';
	let book_desc = ''

</script>

<div class="container justify-center">
	<div class="container m-[10%] flex flex-wrap">
        {#each posts as post (post.book_id)}
		<!-- <h2>({post.title}) {post.author}</h2> -->
		<a href = './books/{post.book_id}'>
			<Card 
		
        title={post.title}
		genres = {post.genres}	
        image_path = { post.image_path}
		cardRating = {post.average_rating}
		description = {`${post.book_desc.slice(0,100)}...`}
		author = {post.author}
		numberOfRatings = {post.ratings.length}
        />
		</a>
		<hr />
		
		{/each}
    </div>

</div>
