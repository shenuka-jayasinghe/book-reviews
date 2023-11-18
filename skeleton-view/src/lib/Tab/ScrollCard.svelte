
<script lang="ts">
    export let  title: string;
    export let image_path: string;
    export let cardRating = 0;
    export let numberOfRatings = 0;
    export let author: string;
    export let bookId: number;
    import Rating from "$lib/Card/Rating.svelte";
    
</script>

<figure>
    <section class="img-bg " />
   <a href="../books/{bookId}" target="_self">
    <div class="">
    
        <div class="max-w-xs min-w-[300px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <!-- <a href="#"> -->
                <img class="rounded-t-md w-full h-[260px] object-cover object-top" src={image_path} alt="" />
            <!-- </a> -->
            <div class="p-5">
                <!-- <a href="#"> -->
                    <div class="">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white min-h-[78px]">{title}</h5>
                    </div>
                <!-- </a> -->
                <Rating
                ratingValue = {cardRating}
                ratingNumber = {numberOfRatings}
                />
                <p class="pb-3 pt-3 text-gray-700 underline dark:text-gray-300">{author}</p>
            </div>
        </div>
    </div>
</a>
</figure>


<style lang="postcss">


</style>
