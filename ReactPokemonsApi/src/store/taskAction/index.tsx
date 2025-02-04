import { ActionType } from '../../interfaces'
import { SEARCH_POKEMON } from '../taskActionTypes'

export const searchPokemon = (task: string): ActionType => {
    return {
        type: SEARCH_POKEMON,
        payload: task,
    }
}
