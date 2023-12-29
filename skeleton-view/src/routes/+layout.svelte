<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

  import { initializeStores } from '@skeletonlabs/skeleton';
  import { Modal } from '@skeletonlabs/skeleton';

  // Initialize Skeleton stores
  initializeStores();

</script>

<!-- MODAL -->

<Modal />


<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<a href= '../books'>
				<strong class="text-xl">cUltuRed.</strong>
				</a>
			</svelte:fragment>
		<LightSwitch />

		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
