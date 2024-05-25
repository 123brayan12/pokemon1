import axios from "axios";

export const pokemonApi = axios.create({
    baseURL: "http://pokeapi.co/api/v2/pokemon"
})

