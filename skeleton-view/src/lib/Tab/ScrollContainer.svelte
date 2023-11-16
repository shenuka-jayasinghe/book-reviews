<script lang="ts">
    export let titles = ['t', 'e', 's', 't'];
    export let image_paths = ['t', 'e', 's', 't'];
    export let cardRatings = [1,2,3,4];
    export let numberOfRatings = [1,2,3,4];
    export let authors = ['t', 'e', 's', 't']; 
    export let bookIds = [1,2,3,4]
    import ScrollCard from "./ScrollCard.svelte";
</script>

<div class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-4">
    {#each titles as title, index}
            <ScrollCard
            bookId={bookIds[index]}
            title={title}
            image_path={image_paths[index]}
            cardRating={cardRatings[index]}
            numberOfRatings={numberOfRatings[index]}
            author={authors[index]} 
        />
    {/each}
</div>
