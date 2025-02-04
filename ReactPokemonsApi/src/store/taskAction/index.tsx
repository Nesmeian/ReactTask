import { ActionType, PokemonDetails, ThemeTypes } from '../../interfaces'
import { CHANGE_THEME, SEARCH_POKEMON, SET_POKEMON } from '../taskActionTypes'

export const searchPokemon = (task: string): ActionType => {
    return {
        type: SEARCH_POKEMON,
        payload: task,
    }
}
export const setPokemon = (task: PokemonDetails[]): ActionType => {
    return {
        type: SET_POKEMON,
        payload: task,
    }
}
export const changeTheme = (task: ThemeTypes): ActionType => {
    return {
        type: CHANGE_THEME,
        payload: task,
    }
}
