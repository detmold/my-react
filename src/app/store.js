import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk' //When you import the module's default, dont't use brace{}
import reducers from '../app/reducers' //When you import the module's default, dont't use brace{}

export const store = createStore(
    reducers, 
    applyMiddleware(reduxThunk)
)
