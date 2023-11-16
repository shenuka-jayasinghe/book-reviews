<script>
// @ts-nocheck

	import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
	let tabSet = 0;
	export let titles = ['n', 'n', 's', 't'];
    export let image_paths = ['t', 'e', 's', 't'];
    export let cardRatings = [1,2,3,4];
    export let numberOfRatings = [1,2,3,4];
    export let authors = []; 
	export let ratings = [5, 5, 5, 5, 2, 2, 3, 1];
	export let reviews = ['', '']
    export let reviewRatings = [4,5]
    export let bookIds = [];
	export let info =
		"Wells' work is a groundbreaking science fiction classic that vividly depicts an alien invasion and the ensuing struggle for survival. The narrative's tension and vivid descriptions create an immersive reading experience.";
	import ScrollContainer from './ScrollContainer.svelte';
	import RatingStats from './RatingStats.svelte';
	import Reviews from './Reviews.svelte';
</script>

<TabGroup>
	<Tab bind:group={tabSet} name="tab1" value={0}>
		<span>Info</span>
	</Tab>
	<Tab bind:group={tabSet} name="tab2" value={1}>Ratings</Tab>
	<Tab bind:group={tabSet} name="tab2" value={2}>Reviews</Tab>
	<!-- Tab Panels --->
	<svelte:fragment slot="panel">
		{#if tabSet === 0}
			{info}
			<h5 class="mt-10 text-2xl tracking-tight text-gray-900 dark:text-white min-h-[60px]">
				Readers of this book also enjoyed
			</h5>
			<div>
				<ScrollContainer
					{bookIds}
					{titles}
					{image_paths}
					{cardRatings}
					{numberOfRatings}
					{authors}
				/>
			</div>
		{:else if tabSet === 1}
			<RatingStats 
			{ratings}
			/>
		{:else if tabSet === 2}
			<Reviews
			{reviews}
			{reviewRatings}
			 />
		{/if}
	</svelte:fragment>
</TabGroup>
