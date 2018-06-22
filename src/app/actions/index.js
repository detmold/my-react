const contactsFetched = contacts => ({
    type: 'FETCH_CONTACT_SUCCESS',
    contacts
})

export const fetchContacts = () => (dispatch, getState) => {
    fetch('https://randomuser.me/api/?format=json&results='+encodeURIComponent(getState().counter))
        .then(res => res.json())
        .then(json => dispatch(contactsFetched(json.results)))
        .then(() => console.log(getState().contacts, getState().counter))
}

export const changeCounter = counter => ({
    type: 'CHANGE_COUNTER',
    counter
})

export const changeCounterAndFetch = counter => dispatch => {
    disaptch(changeCounter(counter))
    dispatch(fetchContacts())
}