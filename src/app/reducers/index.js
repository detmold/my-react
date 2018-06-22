import { combineReducers } from 'redux'
import { contacts } from './contacts'
import { counter } from './counter'

export default combineReducers({
    contacts,
    counter
})
