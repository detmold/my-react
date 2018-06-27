import * as React from "react";
import { ContactItem } from "./ContactItem";
import { Table } from 'react-bootstrap';
import Pagination from './Pagination';

export class ContactsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      total: 0,
      renderedUsers: [],
      contacts: [],
      reverseSort: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (this.props === newProps) return;
    const perPage = this.props.perpage;
    const total = newProps.contacts.length;
    const contacts = newProps.contacts;
    let renderedUsers = []
    const currentPage = (Math.ceil(total / perPage) < this.state.currentPage) && (total !== 0) ? Math.ceil(total / perPage) : this.state.currentPage;
    if (total <= perPage) {
      renderedUsers = contacts
    }
    else renderedUsers = newProps.contacts.slice((currentPage - 1) * perPage, (currentPage - 1) * perPage + perPage);
    this.setState({ currentPage, renderedUsers, total, contacts });
  }

  handleClick(currentPage) {
    const perPage = this.props.perpage;
    const renderedUsers = this.props.contacts.slice((currentPage - 1) * perPage, (currentPage - 1) * perPage + perPage);
    // in a real app you could query the specific page from a server user list
    this.setState({ currentPage, renderedUsers });
  }

  handleSort(e) {
    this.props.onSort(e.currentTarget.className, e.currentTarget.dataset.id, this.state.contacts);
    e.currentTarget.className = e.currentTarget.className === 'triangle-down' ? 'triangle-up' : 'triangle-down';
    if (e.currentTarget.dataset.id === 'id') {
      this.setState({reverseSort: !this.state.reverseSort});
    }
  }

  contactToContactItem = (contact, index) => {
    const avatarUrl = contact.picture.thumbnail;
    const { title, first, last } = contact.name;
    const name = `${title} ${first} ${last}`.trim();
    const phone = contact.phone;
    const key = contact.login.username;
    const perPage = this.props.perpage > this.state.total ? this.state.total : Math.abs(this.props.perpage);
    const curPage = Math.ceil(this.state.total / perPage) < this.state.currentPage ? Math.ceil(this.state.total / perPage) : this.state.currentPage;
    let indexAttr = (curPage * perPage) - perPage + index;
    if (this.state.reverseSort) {
      indexAttr = this.state.total - (curPage * perPage) + perPage - index - 1;
    }
    return <ContactItem key={key + indexAttr} indexAttr={indexAttr} avatarUrl={avatarUrl} name={name} phone={phone} />;
  };

  render() {
    const { currentPage, total } = this.state;
    const count = Math.ceil(total / this.props.perpage) === Infinity ? 0 : Math.ceil(total / this.props.perpage);

    return (
      <div>
        <Table striped bordered condensed hover>
          <thead>
            <tr className="table-header">
              <th width='10%'># <div data-id="id" className="triangle-down" onClick={this.handleSort}></div></th>
              <th width='20%'>Avatar</th>
              <th width='50%'>Name <div data-id="name" className="triangle-down" onClick={this.handleSort}></div></th>
              <th width='20%'>Phone<div data-id="phone" className="triangle-down" onClick={this.handleSort}></div></th>
            </tr>
          </thead>
          <tbody>
            {this.state.renderedUsers.map(this.contactToContactItem)}
          </tbody>
        </Table>
        <Pagination
          margin={2}
          page={currentPage}
          count={count}
          onPageChange={this.handleClick}
        />
      </div>
    );
  }
}