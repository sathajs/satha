<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import { onDestroy } from 'svelte';
  import { numberStore } from '../store';
  let numberVal = numberStore.get();

  const subscribe = numberStore.subscribe((state: number) => {
    numberVal = state;
  });

  onDestroy(() => {
    numberStore.unsubscribe(subscribe);
  });

  const onDecrement = () => {
    numberStore.set((state: number) => state - 1);
  };

  const onIncrement = () => {
    numberStore.set((state: number) => state + 1);
  };
</script>

<main>
  <h1>Test</h1>
  <div>Local storage: {numberVal}</div>
  <button on:click={onDecrement}>-</button> <button on:click={onIncrement}>+</button>
</main>

<style>
</style>
