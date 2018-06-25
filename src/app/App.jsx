import * as React from "react"
import { connect } from "react-redux"
import { fetchContacts } from './actions'
import { ContactsList } from './components/ContactsList'
import { AppHeader } from './components/AppHeader'
import { ContactsCounterContainer } from './ContactsCounter'

export class App extends React.Component {

  componentDidMount() {
    this.props.fetchContacts()
  }

  render() {
    return (
      <div>
        <AppHeader />
        <main className="ui main text container">
          <form className="ui large form">
            <div className="ui segment">
              <ContactsCounterContainer perpage={this.props.perpage} />
            </div>
          </form>
          <ContactsList perpage={this.props.perpage} contacts={this.props.contacts} /> {/* (2) */}
        </main>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts,
    perpage: Math.abs(state.paginationCounter) //this must name the same as exported in combineReducers
  }
}

const mapDispatchFromProps = { fetchContacts }

export const AppContainer = connect(mapStateToProps, mapDispatchFromProps)(App)