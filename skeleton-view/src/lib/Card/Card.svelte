
<script lang="ts">
    export let  title: string;
    export let image_path: string;
    export let cardRating = 0;
    export let numberOfRatings = 0;
    export let description: string;
    export let author: string;
    export let genres = ['test1', 'test2'];
    import GenreButton from "./GenreButton.svelte";
    import Rating from "./Rating.svelte";
</script>

<figure>
    <section class="img-bg " />
    <div class="">
    
        <div class="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5 transition-transform transform hover:scale-105">
            <!-- <a href="#"> -->
                <img class="rounded-t-md w-full h-[260px] object-cover object-top" src={image_path} alt="" />
            <!-- </a> -->
            <div class="p-5">
                <!-- <a href="#"> -->
                    <div class="">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white min-h-[60px]">{title}</h5>
                    <div class="py-4 min-h-[150px]">
                        <GenreButton
                        {genres}
                        />
                    </div>
                    </div>
                <!-- </a> -->
                <Rating
                ratingValue = {cardRating}
                ratingNumber = {numberOfRatings}
                />
                <p class="pb-3 pt-3 text-gray-700 underline dark:text-gray-300">{author}</p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                <!-- <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> -->
                    Review
                     <!-- <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg> -->
                <!-- </a> -->
            </div>
        </div>
    </div>
</figure>


<style lang="postcss">


</style>
