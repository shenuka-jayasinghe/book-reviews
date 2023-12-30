<script>
	import { onMount } from 'svelte';
	import ReviewModal from '$lib/ReviewHead/ReviewModal.svelte';
  	let showModal = false
  	const handleToggleModal = () => {
    showModal = !showModal
  }

	

  let showParagraph1 = false;
  let showParagraph2 = false;
  let showParagraph3 = false;
  let showParagraph4 = false;
  let showParagraph5 = false;

	/**
	 * @type {string | any[]}
	 */
	let posts = [];
	let genres = [];
	onMount(() => {
		setTimeout(() => {
      showParagraph1 = true;
    }, 10000);

    setTimeout(() => {
      showParagraph2 = true;
    }, 15000);

    setTimeout(() => {
      showParagraph3 = true;
    }, 10000);

    setTimeout(() => {
      showParagraph4 = true;
    }, 15000);

	setTimeout(() => {
      showParagraph5 = true;
    }, 20000)
			fetch('https://book-review-api.onrender.com/api/book')
			.then((response) => {
				return response.json();
			})
			.then((result) => {
				posts = result;
				console.log(result)
			});
	});
	import Card from '$lib/Card/Card.svelte';
	let book_desc = ''

	import { ProgressBar } from '@skeletonlabs/skeleton';
	import { Result } from 'postcss';
	

</script>

<div class="container justify-center">

{#if posts.length < 7 }
<div class="container m-[2rem]">
	<ProgressBar animIndeterminate="anim-progress-bar"/>
  
	{#if showParagraph1}
	  <p class="m-[1rem]">The content is loading from render.com.</p>
	{/if}
  
	{#if showParagraph2}
	  <p class="m-[1rem]">Please allow 40s for it to load.</p>
	{/if}
  
	{#if showParagraph3}
	  <p class="m-[1rem]">Why is it so slow?</p>
	{/if}
  
	{#if showParagraph4}
	  <p class="m-[1rem]">Because it's free!</p>
	{/if}

	{#if showParagraph5}
	  <p class="m-[1rem]">One solution to manage user patience, is keeping them engaged. :)</p>
	{/if}
  </div>
  {:else}
  <div class="container m-[10%] flex flex-wrap">
	{#each posts as post (post.book_id)}

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
  
{/if}

	

</div>

<style>

.anim-progress-bar {
	transform-origin: 0% 50%;
	animation: anim-progress-bar 2s infinite linear;
}
@keyframes anim-progress-bar {
	0% { transform: translateX(50%) scaleX(0.5); }
	50% { transform: translateX(0) scaleX(0.5); }
	100% { transform: translateX(50%) scaleX(0.5); }
}
</style>