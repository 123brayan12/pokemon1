<template>
    <div  class="grid grid-cols-2 gap-12 items-center mx-32 mt-6 space-y-1">
  <button
        @click="$emit('SelectionPokemon',pokemon.id)" 
        class="text-5xl border-4 p-4 rounded-2xl "
       
        v-for="pokemon in pokemons" 
        :key="pokemon.id"
        :disabled="shownPokemon == true || shownAnswer == true">
        {{ pokemon.name  }}
   
    </button>
    
 </div>
</template>
<script lang="ts" setup>
import type { Pokemon } from 'env'

defineProps<{
    pokemon1: Pokemon|undefined,
    pokemons: Pokemon[],
    shownPokemon: boolean,
    shownAnswer: boolean,
}>()
</script>