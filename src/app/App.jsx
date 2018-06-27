import * as React from "react"
import { connect } from "react-redux"
import { fetchContacts, sortContacts } from './actions'
import { ContactsList } from './components/ContactsList'
import { AppHeader } from './components/AppHeader'
import { ContactsCounterContainer } from './ContactsCounter'
import { getFilteredContacts } from "./selectors/getFilteredContacts";

export class App extends React.Component {

  constructor(props) {
    super(props);
    this.sortContacts = this.sortContacts.bind(this);
  }

  componentDidMount() {
    this.props.fetchContacts()
  }

  sortContacts(method, field, contacts) {
    this.props.sortContacts(method, field, contacts)
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
          <ContactsList perpage={this.props.perpage} onSort={this.sortContacts} contacts={this.props.contacts} /> {/* (2) */}
        </main>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    //filter works on immutable state and return filtered results to ContactsList component which use this prop
    contacts: getFilteredContacts(state.contacts, state.contactsSearch),
    perpage: Math.abs(state.paginationCounter) //this must name the same as exported in combineReducers
  }
}

const mapDispatchFromProps = { 
  fetchContacts, 
  sortContacts 
}

export const AppContainer = connect(mapStateToProps, mapDispatchFromProps)(App)