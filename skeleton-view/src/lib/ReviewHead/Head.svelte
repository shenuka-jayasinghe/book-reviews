<script>
	import { getModalStore } from '@skeletonlabs/skeleton';
	import ReviewModal from './ReviewModal.svelte';
	export let showModal = false;
	const handleToggleModal = () => {
		showModal = !showModal;
	};

	const modalStore = getModalStore();
	import Breadcrumb from './Breadcrumb.svelte';
	import Rating from '$lib/Card/Rating.svelte';
	// @ts-ignore
	import Button from './Button.svelte';
	import test from 'node:test';
	export let lastCrumb = 'f';
	export let cardRating = 3;
	export let numberOfRatings = 28;
	export let title = '';
	export let author = '';
	export let price = '12.00';
	export let imagePath = 'https://m.media-amazon.com/images/I/81FBh5Q17xL._SL1500_.jpg';
	export let bookId = 1;

	/**
	 * @param {undefined} [review]
	 */
	async function doPost(review) {
		const res = await fetch(`https://book-review-api.onrender.com/api/book/${bookId}`, {
			method: 'POST',
			body: JSON.stringify({
				review,
				rating: 2
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}

	const modal = {
		type: 'prompt',
		title: 'Add review',
		body: 'Tell us what you thought',
		value: '',
		valueAttr: { type: 'text', minlength: 3, maxlength: 100, required: true },
		response: (/** @type {any} */ r) => {
			doPost(r).then(() => {
				window.location.reload();
			});
		}
	};

	// @ts-ignore
	// function openPromptModal() {
	// 	// @ts-ignore
	// 	modalStore.trigger(modal);
	// }
</script>

<div class=" flex flex-row">
	<div class="basis-1/3 relative flex justify-center items-center">
		<div class="absolute z-50">
			<img class="rounded-t-md min-w-[200px] h-[370px]" src={imagePath} alt="" />
		</div>
		<div class="filter blur-sm relative z-0">
			<div class="">
				<div class="card px-[200px] pb-[360px] z-0" />
			</div>
		</div>
	</div>
	<div class=" basis-2/3 pl-4">
		<div class=" flex flex-col">
			<div class="basis-1/2">
				<div class="pt-3">
					<Breadcrumb {lastCrumb} />
				</div>
			</div>
			<div class=" basis-1/2">
				<h5 class="my-3 text-5xl tracking-tight text-gray-900 dark:text-white min-h-[60px]">
					{title}
				</h5>
			</div>
			<div class=" basis-1/2">
				<p class="pb-3 pt-3 text-gray-700 dark:text-gray-300">
					by <span class="underline">{author}</span>
				</p>
			</div>
			<div class=" basis-1/2">
				<div class="py-2">
					<Rating ratingValue={cardRating} ratingNumber={numberOfRatings} />
				</div>
			</div>
			<div class=" basis-1/2">
				<p class="pt-2 text-gray-700 dark:text-gray-300">Total Pages: 584</p>
			</div>
			<div class=" basis-1/2">
				<p class="pt-2 text-gray-700 dark:text-gray-300">{`Price: £${price}`}</p>
			</div>
			<div class=" basis-1/2" />
			<div class=" basis-1/2">
				<div class="pt-4">
					<!-- <button
						on:click={openPromptModal}
						class="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded"
					>
						<span>Add your review</span>
					</button> -->
					<button on:click={() => handleToggleModal()}>Open modal</button>
					<ReviewModal title="Edit your details" open={showModal} on:close={() => handleToggleModal()}>
						<svelte:fragment slot="body">This is content inside my modal! 👋</svelte:fragment>
					</ReviewModal>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	@media (max-width: 768px) {
		.flex-row {
			flex-direction: column;
		}
	}
</style>
