import * as React from "react"
import { connect } from "react-redux"
import { changeCounter, changeCounterAndFetch, changePaginationAndFetch, handlePagination, searchContacts  } from "./actions"
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap';

class ContactsCounter extends React.Component {

  //TODO move render html to dumb components
  render() {
    return (
        <div>
            <div className="field">
                <input type="number" value={this.props.counter} onChange={this.handleCounterChange} />
                <Button bsStyle="success" onClick={this.handleRecordsCounter}>Ustaw ilość pobranych rekordów</Button>
            </div>
            <br />
            <div className="field">
                <input type="number" min="1" value={this.props.perpage} onChange={this.handlePagination} />
                <Button bsStyle="success" onClick={this.handlePerPageChange}>Ustaw licznik paginacji</Button>
            </div>
            <div className="field">
              <div className="ui icon fluid input">
                <input
                  type="text"
                  placeholder="Search..."
                  value={this.props.contactsSearch}
                  onChange={this.handleSearchChange}
                />
                <i className="search icon" />
              </div>
            </div>
        </div>
    )
  }

  handleCounterChange = e => {
    this.props.changeCounter(Number(e.currentTarget.value))
  }

  handleRecordsCounter = e => {
    this.props.changeCounterAndFetch(this.props.counter)
  }

  handlePerPageChange = e => {
    this.props.changePaginationAndFetch(this.props.perpage)
  }

  handlePagination = e => {
    this.props.handlePagination(Number(e.currentTarget.value))
  }

  handleSearchChange = e => {
    this.props.searchContacts(e.currentTarget.value);
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter,
    contactsSearch: state.contactsSearch
  }
}
const mapDispatchToProps = { 
    changeCounter,
    changeCounterAndFetch,
    handlePagination,
    changePaginationAndFetch,
    searchContacts
}

export const ContactsCounterContainer = connect(mapStateToProps, mapDispatchToProps)(
  ContactsCounter
)

ContactsCounter.propTypes = {
    counter: PropTypes.number,
    perpage: PropTypes.number
}