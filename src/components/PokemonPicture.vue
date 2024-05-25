<template>
  <div  class=" flex justify-center">
    <img v-if="!shownPokemon" :src="img" class="hidden-pokemon w-96 h-96" alt="imagen pokemon">
    <img v-else :src="img" alt="imagen-pokemon" class="w-96 h-96"/>
  </div>
 
</template>

<script lang="ts" setup> 
 const props = defineProps<{
  pokemonId: number,
  shownPokemon: boolean
 }>()
 const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ props.pokemonId }.svg`
</script>

<style>
    .hidden-pokemon{
      filter: brightness(0);
    }
</style>