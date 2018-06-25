const contactsFetched = contacts => ({
    type: 'FETCH_CONTACT_SUCCESS',
    contacts
})

export const fetchContacts = () => (dispatch, getState) => {
    fetch('https://randomuser.me/api/?format=json&results='+encodeURIComponent(getState().counter))
        .then(res => res.json())
        .then(json => dispatch(contactsFetched(json.results)))
        .then(() => console.log(getState().contacts, getState().perpage, getState().counter))
}

export const changeCounter = counter => ({
    type: 'CHANGE_COUNTER',
    counter
})

export const changePaginationCounter = perpage => ({
    type: 'CHANGE_PAGINATION_COUNTER',
    perpage
})

export const sortContacts = (method, field, contacts) => ({
    type: 'SORT_CONTACTS',
    method,
    field,
    contacts
})
    
export const sortHandle = (method, field) => (dispatch, getState) => {
    dispatch(sortContacts(method, field, getState().contacts))
    dispatch(contactsFetched(getState().contacts))
}

export const handlePagination = perpage => dispatch => {
    dispatch(changePaginationCounter(perpage))
    dispatch(fetchContacts())
}

export const changeCounterAndFetch = counter => dispatch => {
    dispatch(changeCounter(counter))
    dispatch(fetchContacts())
}

export const changePaginationAndFetch = perpage => dispatch => {
    dispatch(handlePagination(perpage))
    dispatch(fetchContacts())
}