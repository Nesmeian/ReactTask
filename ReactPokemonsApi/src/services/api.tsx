import { Pokemon, PokemonDetails, PokemonResponse } from '../utils/interfaces'

export default async function fetchPokemons(): Promise<PokemonResponse> {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
    if (!response.ok) {
        throw new Error('Network response was not ok')
    }
    return response.json()
}
export const getPokemons = async (): Promise<PokemonDetails[]> => {
    const pokemons: PokemonResponse = await fetchPokemons()
    const allPockemons = await Promise.all(
        pokemons.results.map(async (e: Pokemon) => {
            const response = await fetch(e.url)
            return response.json() as Promise<PokemonDetails>
        }),
    )
    return allPockemons
}
