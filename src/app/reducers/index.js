import { combineReducers } from 'redux'
import { contacts } from './contacts'
import { counter } from './counter'
import { paginationCounter } from './paginationCounter'
import { contactsSearch } from './contactsSearch'

export default combineReducers({
    contacts,
    counter,
    paginationCounter,
    contactsSearch
})
