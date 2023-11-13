<script>
	import Breadcrumb from "./Breadcrumb.svelte";

    export let imagePath = 'https://m.media-amazon.com/images/I/81FBh5Q17xL._SL1500_.jpg'
</script>

<div class="border border-black flex flex-row">
    <div class="border border-black basis-1/3 flex justify-center">
        <img class="rounded-t-md min-w-[200px] h-[360px]" src={imagePath} alt="" />
    </div>
    <div class="border border-black basis-2/3">
        <div class="border border-black flex flex-col">
            <div class="border border-black basis-1/2">
                <Breadcrumb/>
            </div>
            <div class="border border-black basis-1/2">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white min-h-[60px]">The War of the Worlds</h5>
            </div>
            <div class="border border-black basis-1/2">
                <p class="pb-3 pt-3 text-gray-700 dark:text-gray-300">by <span class="underline">H. G. Wells</span></p>
            </div>
            <div class="border border-black basis-1/2">05</div>
            <div class="border border-black basis-1/2">06</div>




        </div>
    </div>
  </div>
  