import { ActionType } from '../../interfaces'
import { SEARCH_POKEMON } from '../taskActionTypes'
const initialState = {
    search: '',
    pokemons: [],
}
const taskReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case SEARCH_POKEMON:
            return {
                ...state,
                search: action.payload,
            }
        default:
            return state
    }
}
export default taskReducer
