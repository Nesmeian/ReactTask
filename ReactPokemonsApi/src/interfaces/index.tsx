import {
    CHANGE_THEME,
    SEARCH_POKEMON,
    SET_POKEMON,
} from '../store/taskActionTypes'

export interface Pokemon {
    name: string
    url: string
}

export interface PokemonResponse {
    results: Pokemon[]
}
interface SearchPokemonAction {
    type: typeof SEARCH_POKEMON
    payload: string
}

interface SetPokemonAction {
    type: typeof SET_POKEMON
    payload: PokemonDetails[]
}

export type ActionType =
    | SearchPokemonAction
    | SetPokemonAction
    | ThemeTypesAction
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
interface ThemeTypesAction {
    type: typeof CHANGE_THEME
    payload: ThemeTypes
}
export type ThemeTypes = 'dark' | 'light'
export interface StateTypes {
    search: string
    themeMode: ThemeTypes
    pokemons: PokemonDetails[]
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
