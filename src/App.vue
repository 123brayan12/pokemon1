<script setup lang="ts">
 import type { Pokemon } from 'env';
 import getPokemonOptions from './api/getPokemonOptions';
 import { ref } from 'vue';
 import Pokemonoptions from './components/Pokemonoptions.vue';
 import PokemonPicture from './components/PokemonPicture.vue';
 

 const pokemonArr = ref<Pokemon[]>([])
 const pokemon = ref<Pokemon>()
 const shownPokemon = ref<boolean>(false)
 const shownAnswer = ref<boolean>(false)
 const message = ref<string>()
 const selectedId = ref<number>()
 const racha = ref<number>(0)

 const mixPokemonArray =async()=>{
  pokemonArr.value = await getPokemonOptions()
  const randomInt = Math.floor(Math.random()*4)
  pokemon.value = pokemonArr.value[randomInt]

 }
const checkAnswer =(selectedId: number)=>{
  shownPokemon.value = true
  shownAnswer.value = true

  if(selectedId === pokemon.value?.id ){
    racha.value=racha.value+1
     message.value = `Correcto mmgv ya no me voy a romper a tu hermana , eso era ${pokemon.value.name}`

  }
  else{
    racha.value=0
    const mensajes =[
      `Mmgv eso era un ${pokemon.value?.name}`,
      `hijo de perra eso era un ${pokemon.value?.name} , por eso te montan cacho`,
      `Por culpa de que no sabis que eso era un ${pokemon.value?.name} tu hermana es brutamente follada por mi `,
      `Eso era un ${pokemon.value?.name} , te pareces a frank hijueputa`,
      `Si te vuelves a equivocar te voy a desdunar  y te voy a poner en un  poste`,
      `Tu mai esta siendo cojida por 10 negros por tu no saber que eso era un  ${pokemon.value?.name}`,
      ` ${pokemon.value?.name}  eso era un  ${pokemon.value?.name}, maldita perra`,
      `Te voy a violar si no te aprendes los pokemones, eso era un  ${pokemon.value?.name}`,
      `Voy a hacer un trio con tu mama y tu hermana`,
      `Como tu no sabes que eso es un ${pokemon.value?.name}, le voy a dejar el colo rojo rojito a tu jva `,
      `Voy a follar a tu perro`,
      `voy a mandar a unos negros con una poronga de 10m a que te lo metan entre todos`,
    ]
    const randomInt = Math.floor(Math.random()*mensajes.length)
    message.value = mensajes[randomInt]
  }
}
const newGame =()=>{
  shownPokemon.value = false
  shownAnswer.value = false
  pokemonArr.value = []
  pokemon.value = undefined
  mixPokemonArray()

}

mixPokemonArray()
</script>

<template>
  <div class="m-12">
   <PokemonPicture  v-if="pokemon" :shown-pokemon="shownPokemon":pokemon-id="pokemon.id"/>
     <div class=" flex items-center flex-col text-4xl font-bold mt-12 ">
    <p>{{ racha }}</p> 
    <p  v-if="racha == 10">manin tu dedes ser un pipe ,cuiden a sus novias</p>
   </div>
  
   <Pokemonoptions 
   :pokemon1="pokemon"
   :shown-pokemon="shownPokemon" 
   :shown-answer="shownAnswer"
    @selection-pokemon="checkAnswer"
   :pokemons="pokemonArr"/>
   </div>
  <div v-if="shownAnswer" class="flex flex-col text-center space-y-6">
    <p class="text-3xl font-bold">{{ message }}</p>
  </div>
  <div class="flex justify-center">
    <button class="border-4 p-2 rounded-2xl" @click="newGame">Nuevo juego</button>
  </div>

</template>


