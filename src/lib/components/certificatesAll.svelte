<script>
  import { onMount } from 'svelte';

  let data = null; // Inicializamos data como null para indicar que aún no está cargado

  onMount(async () => {
    try {
      const response = await fetch('cdb.json');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  });
</script>

<style>
</style>
<div class="grid grid-cols-7 gap-1">
{#if data !== null}
  {#each data.projectsData as project}
    <div>
      <img src={project.img} alt={project.title} class="w-auto rounded-md transition-all duration-500 hover:scale-[2.5] hover:drop-shadow-[0_0_30px_rgba(255,255,255,1)] hover:filter hover:brightness-100"/>
    </div>
  {/each}
{:else}
  <p>Cargando datos...</p>
{/if}
</div>