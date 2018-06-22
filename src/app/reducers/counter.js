export const counter = (state = 100, action) => {
    switch (action.type) {
      case 'CHANGE_COUNTER':
        return action.counter
      default:
        return state
    }
  }