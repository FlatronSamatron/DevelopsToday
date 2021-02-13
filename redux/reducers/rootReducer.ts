import { combineReducers } from 'redux'
import { postReducer } from './postReducer'

export const rootReducer = combineReducers({
    user: postReducer
})

export type RootState = ReturnType<typeof rootReducer>