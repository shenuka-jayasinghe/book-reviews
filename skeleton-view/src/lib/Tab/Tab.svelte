<script>
	import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
	let tabSet = 0;
	export let title = 't';
	export let image_path = 't';
	export let cardRating = 0;
	export let numberOfRatings = 0;
	export let description = 't';
	export let author = 't';
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
			<h5 class="my-3 text-2xl tracking-tight text-gray-900 dark:text-white min-h-[60px]">
				Readers of this book also enjoyed
			</h5>
			<div>
				<ScrollContainer
					{title}
					{image_path}
					{cardRating}
					{numberOfRatings}
					{description}
					{author}
				/>
			</div>
		{:else if tabSet === 1}
			<RatingStats />
		{:else if tabSet === 2}
			<Reviews />
		{/if}
	</svelte:fragment>
</TabGroup>
