<script>
    import { onMount } from 'svelte'
  
    // @ts-ignore
    /**
	 * @type {any[]}
	 */
    let posts = []
    onMount(() => {
    fetch('http://localhost:5000/')
      .then(response => {
        return response.json()
    })
      .then(result => {
        console.log(posts)
        posts = result})
  })
</script>

<div class="container m-3">
    {#each posts as post (post.book_id)}
  <h2>({post.title}) {post.author}</h2>

  <!-- <p>{post.body}</p> -->
  <hr>
{/each}
</div>
