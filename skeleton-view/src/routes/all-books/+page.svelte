<script>
	import { onMount } from 'svelte';

	// @ts-ignore
	/**
	 * @type {any[]}
	 */
	let posts = [];
	onMount(() => {
		fetch('http://localhost:5000/all-books')
			.then((response) => {
				return response.json();
			})
			.then((result) => {
				console.log(posts);
				posts = result;
				console.log(posts)
			});
	});
	import Card from '$lib/Card/Card.svelte';

    // let bookTitle = "Title";
    // let imagePath = "";
	// let ratingValue = 0;
	// let maxRating = 5;

</script>

<div class="container m-10">
	<div class="container m-10 flex flex-wrap">
        {#each posts as post (post.book_id)}
		<!-- <h2>({post.title}) {post.author}</h2> -->
		<Card 
		
        title={post.title}
        image_path = { post.image_path}
		cardRating = {post.average}	
        />
		<hr />
	{/each}
    </div>

</div>
