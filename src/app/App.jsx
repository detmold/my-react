import * as React from "react"
import { connect } from "react-redux"
import { fetchContacts } from './actions'

export class App extends React.Component {

    componentDidMount() {
        this.props.fetchContacts()
    }

    render() {
        return (
            <div>
                gowno
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        contacts: state.contacts
    }
}

const mapDispatchFromProps = { fetchContacts }

export const AppContainer = connect(mapStateToProps, mapDispatchFromProps)(App)