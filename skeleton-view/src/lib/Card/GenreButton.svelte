<script>
    export let genres = ['test1', 'test2']
</script>

{#each genres as genre}
<button type="button" class="btn bg-gray-200 dark:bg-gray-700 mr-4 mb-4 ">{genre}</button>
{/each}