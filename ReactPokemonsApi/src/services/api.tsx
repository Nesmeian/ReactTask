import {
    Pokemon,
    PokemonDescription,
    PokemonDetails,
    PokemonResponse,
} from '../utils/interfaces'

export default async function fetchPokemons(
    seacrh?: string,
): Promise<PokemonResponse> {
    const response =
        seacrh !== undefined
            ? await fetch(`https://pokeapi.co/api/v2/pokemon/${seacrh}`)
            : await fetch(`https://pokeapi.co/api/v2/pokemon/`)
    if (!response.ok) {
        throw new Error('Network response was not ok')
    }
    return response.json()
}
export const getPokemons = async (
    search?: string,
): Promise<PokemonDetails[] | PokemonDetails> => {
    const pokemons = await fetchPokemons(search)
    if ('results' in pokemons) {
        const allPokemons = await Promise.all(
            pokemons.results.map(async (e: Pokemon) => {
                const response = await fetch(e.url)
                return response.json() as Promise<PokemonDetails>
            }),
        )
        return allPokemons
    } else {
        return pokemons as PokemonDetails
    }
}
export const getDescription = async (
    data: PokemonDetails,
): Promise<PokemonDetails[] | PokemonDetails> => {
    const pokemons: PokemonDetails[] = await getPokemons()
    const allPokemons: PokemonDescription[] = await Promise.all(
        pokemons.map(async (e: PokemonDetails) => {
            const response = await fetch(e.species.url)
            return response.json() as Promise<PokemonDetails>
        }),
    )
    console.log(data)
    allPokemons.forEach((e, i) => {
        if (Array.isArray(data)) {
            data[i].description = e['flavor_text_entries'][0]['flavor_text']
        } else {
            data.description = e['flavor_text_entries'][0]['flavor_text']
        }
    })
    return data
}
