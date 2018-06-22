export const contacts = (state = [], action) => {
    switch (action.type) {
      case 'FETCH_CONTACT_SUCCESS':
        return [
          ...action.contacts
        ]
      default:
        return state
    }
  }