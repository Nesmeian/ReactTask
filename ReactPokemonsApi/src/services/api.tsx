import {
    Pokemon,
    PokemonDescription,
    PokemonDetails,
    PokemonResponse,
} from '../interfaces'

export default async function fetchPokemons(
    seacrh?: string,
): Promise<PokemonResponse | false> {
    try {
        const response =
            seacrh !== undefined
                ? await fetch(`https://pokeapi.co/api/v2/pokemon/${seacrh}`)
                : await fetch(`https://pokeapi.co/api/v2/pokemon/`)
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
    if (pokemons === false) {
        return false
    }

    if (pokemons instanceof Object) {
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
    return false
}

export const getDescription = async (
    search?: string,
): Promise<PokemonDetails[] | PokemonDetails | false> => {
    const pokemons = await getPokemons(search)
    if (typeof pokemons === 'boolean') {
        return pokemons
    }
    console.log(pokemons[0])
    const allPokemons: PokemonDescription[] = await Promise.all(
        pokemons.map(async (e: PokemonDetails) => {
            const response = await fetch(e.species.url)
            return response.json() as Promise<PokemonDescription>
        }),
    )
    allPokemons.forEach((e, i) => {
        if (search === undefined) {
            pokemons[i].description = e['flavor_text_entries'][0]['flavor_text']
        } else {
            pokemons[0].description = e['flavor_text_entries'][0]['flavor_text']
        }
    })
    return pokemons
}
