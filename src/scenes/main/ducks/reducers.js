import { combineReducers } from 'redux'

import types from './types'

const INITIAL_STATE = {
    search: '',
    data: [],
    handledData: [],
    favourites: [],
    isLoading: false
}

const appReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.SEARCH:
            return { ...state, data: action.payload }
        case types.RESET_SEARCH:
            return { ...state, data: action.payload }
        case types.IS_LOADING:
            return { ...state, isLoading: true }
        case types.HIDE_LOADING:
            return { ...state, isLoading: false }
        case types.ADD_FAVOURITES:
            return { ...state, favourites: action.payload }
        case types.REMOVE_FAVOURITES:
            return { ...state, favourites: action.payload }
        case types.CHANGE_SEARCH:
            return { ...state, search: action.payload }
        case types.ADD_HANDLED_DATA:
            return { ...state, handledData: action.payload, isLoading: false }
        case types.ADD_DATA:
            return { ...state, data: action.payload }
        default:
            return { ...state }
    }
}

const reducer = combineReducers({
    appReducer
})

export default reducer