<script>
	import Head from "$lib/ReviewHead/Head.svelte";
    import Tab from "$lib/Tab/Tab.svelte";
    import { onMount } from 'svelte';

	// @ts-ignore
	/**
	 * @type {any[]}
	 */
	let posts = [];
	onMount(() => {
		fetch('http://localhost:5000/books')
			.then((response) => {
				return response.json();
			})
			.then((result) => {
				console.log(posts);
				posts = result;
				console.log(posts)
			});
	});
</script>


<div class="my-[30px] mx-[10%]">
    <Head />
</div>
<div class="my-[30px] mx-[10%]">
    <Tab
    />
</div>