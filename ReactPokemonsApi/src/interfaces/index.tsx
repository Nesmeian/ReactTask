export interface Pokemon {
    name: string
    url: string
}

export interface PokemonResponse {
    results: Pokemon[]
}
export interface ActionType {
    type: 'CHANGE_SEACRH'
    payload: 'string'
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
    stats: StatsTypes[]
}
interface StatsTypes {
    base_stat: number
    effort: number
    stat: StatName
}
interface StatName {
    name: string
    url: string
}
interface PokemonTypes {
    type: {
        name: string
        url: string
    }
}
export interface StatsColorsTypes {
    fire: string
    fairy: string
    poison: string
    grass: string
    bug: string
    ground: string
    water: string
    fighting: string
    psychic: string
    rock: string
    electric: string
    steel: string
    flying: string
    ghost: string
    ice: string
    dragon: string
    dark: string
    normal: string
}
export interface PokemonDescription {
    flavor_text_entries: pokemonText[]
}

export interface pokemonText {
    flavor_text: string
    language: Pokemon
    version: Pokemon
}
