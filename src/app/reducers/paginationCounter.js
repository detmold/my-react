export const paginationCounter = (state = 20, action) => {
    switch (action.type) {
      case 'CHANGE_PAGINATION_COUNTER':
        return action.perpage
      default:
        return state
    }
  }