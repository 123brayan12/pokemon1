import {pokemonApi} from "./pokemonApi";
import type { Pokemon } from "env";

const getPokemons = (): number[]=>{
    const pokemonArr = Array.from(Array(650))
    return pokemonArr.map((_, index)=> index+1)

}

const pokemonName = async(pokemons: number[]):Promise<Pokemon[]>=>{
    if(pokemons.length  != 4) throw "error"
    const [a,b,c,d]= pokemons

    const promiseArr=[
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`),
    ]
    const[p1,p2,p3,p4] = await Promise.all(promiseArr)

    return[
        {name: p1.data.name, id:p1.data.id},
        {name: p2.data.name, id:p2.data.id},
        {name: p3.data.name, id:p3.data.id},
        {name: p4.data.name, id:p4.data.id}
    ]
}



const getPokemonOptions =async ()=>{
    const mixedPokemons = getPokemons().sort(()=>Math.random()-0.5) 
    const pokemons = await pokemonName(mixedPokemons.splice(0,4))
    return pokemons
}

export default getPokemonOptions