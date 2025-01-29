export interface Pokemon {
    name: string
    url: string
}

export interface PokemonResponse {
    results: Pokemon[]
}

export interface PokemonDetails {
    id: number
    name: string
    description: string
    sprites: {
        other: {
            dream_world: {
                front_default: string
            }
        }
    }
    types: PokemonTypes[]
    species: Pokemon
}
interface PokemonTypes {
    type: {
        name: string
        url: string
    }
}
export interface PokemonDescription {
    flavor_text_entries: pokemonText[]
}

export interface pokemonText {
    flavor_text: string
    language: Pokemon
    version: Pokemon
}
