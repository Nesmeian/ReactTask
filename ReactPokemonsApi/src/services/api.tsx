import { PokemonResponse } from '../utils/interfaces'

export default async function fetchPokemons(): Promise<PokemonResponse> {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
    if (!response.ok) {
        throw new Error('Network response was not ok')
    }
    return response.json()
}
