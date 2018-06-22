import * as React from "react"
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import { AppContainer } from '../app/App'
import { store } from '../app/store'

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('root')
)



