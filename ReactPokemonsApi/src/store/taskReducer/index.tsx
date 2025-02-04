import { ActionType, StateTypes } from '../../interfaces'
import { SEARCH_POKEMON, SET_POKEMON } from '../taskActionTypes'

const initialState: StateTypes = {
    search: '',
    pokemons: [],
}
const taskReducer = (state = initialState, action: ActionType): StateTypes => {
    switch (action.type) {
        case SEARCH_POKEMON:
            return {
                ...state,
                search: action.payload,
            }
        case SET_POKEMON:
            return {
                ...state,
                pokemons: action.payload,
            }
        default:
            return state
    }
}
export default taskReducer
