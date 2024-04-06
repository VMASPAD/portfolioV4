<script>
  import { onMount } from 'svelte';
  /**
	 * @type {{ projectsData: any; } | null}
	 */
  let data = null;
  /**
	 * @type {null}
	 */
  let selectedImage = null;

  onMount(async () => {
    try {
      const response = await fetch('db.json');
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
  .img-zoom {
    z-index: 10;
  }
</style>

<div class="grid grid-cols-7 gap-1">
  {#if data !== null}
    {#each data.projectsData as project}
      <div class="flex flex-col items-center relative">
        <img
          src={project.img}
          alt={project.title}
          class="w-full h-20 object-cover rounded-md transition-all duration-500 hover:scale-[2.5] hover:drop-shadow-[0_0_30px_rgba(255,255,255,1)] hover:filter hover:brightness-100"
          class:img-zoom={selectedImage === project.img}
          on:mouseenter={() => (selectedImage = project.img)}
          on:mouseleave={() => (selectedImage = null)}
        />
        <a
          target="_blank"
          href={project.web}
          class="font-bold text-sm mt-2 absolute bottom-0 left-0 right-0 mx-auto mb-2"
        >
          Ver trabajo
        </a>
      </div>
    {/each}
  {:else}
    <p>Cargando datos...</p>
  {/if}
</div>