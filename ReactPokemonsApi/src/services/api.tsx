import { Dispatch } from 'redux'
import {
    Pokemon,
    PokemonDescription,
    PokemonDetails,
    PokemonResponse,
    pokemonText,
} from '../interfaces'

export default async function fetchPokemons(
    search?: string,
): Promise<PokemonResponse | false> {
    try {
        const url = search
            ? `https://pokeapi.co/api/v2/pokemon/${search}`
            : `https://pokeapi.co/api/v2/pokemon/`
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        return response.json()
    } catch {
        return false
    }
}

export const getPokemons = async (
    search?: string,
): Promise<PokemonDetails[] | false> => {
    const pokemons = await fetchPokemons(search)
    if (!pokemons) {
        return false
    }

    if ('results' in pokemons) {
        const allPokemons = await Promise.all(
            pokemons.results.map(async (e: Pokemon) => {
                const response = await fetch(e.url)
                return response.json() as Promise<PokemonDetails>
            }),
        )
        return allPokemons
    } else {
        return [pokemons as PokemonDetails]
    }
}

export const getDescription = async (
    dispatch: Dispatch,
    search?: string,
): Promise<void> => {
    const pokemons = await getPokemons(search)
    if (!pokemons) {
        dispatch({ type: 'SET_POKEMON', payload: [] })
        return
    }

    const allPokemons: PokemonDescription[] = await Promise.all(
        pokemons.map(async (e: PokemonDetails) => {
            const response = await fetch(e.species.url)
            return response.json() as Promise<PokemonDescription>
        }),
    )

    const getFlavorText = (entries: pokemonText[]): string =>
        entries.length > 0 ? entries[0].flavor_text : 'No description available'

    allPokemons.forEach((e, i) => {
        pokemons[i].description = getFlavorText(e.flavor_text_entries ?? [])
    })

    dispatch({ type: 'SET_POKEMON', payload: pokemons }) // Отправляем в Redux
}
