const propComparator = (prop, method = 'triangle-up') => {
  switch (method) {
    case 'triangle-up':
      return function (a, b) {
        var propSplit = [];
        var propFlag = false;
        if (prop.indexOf('.') !== -1) {
          propSplit = prop.split('.')
          propFlag = true;
        } 
        if (propFlag) {
          if (a[propSplit[0]][propSplit[1]] > b[propSplit[0]][propSplit[1]]) {
            return -1;
          }
          if (a[propSplit[0]][propSplit[1]] < b[propSplit[0]][propSplit[1]])
            return 1;
          return 0;
        } else {
          if (a[prop] > b[prop]) {
            return -1;
          }
          if (a[prop] < b[prop])
            return 1;
          return 0;
        }
      }
    case 'triangle-down':
      return function (a, b) {
        var propSplit = [];
        var propFlag = false;
        if (prop.indexOf('.') !== -1) {
          propSplit = prop.split('.')
          propFlag = true;
        } 
        if (propFlag) {
          if (a[propSplit[0]][propSplit[1]] < b[propSplit[0]][propSplit[1]]) {
            return -1;
          }
          if (a[propSplit[0]][propSplit[1]] > b[propSplit[0]][propSplit[1]])
            return 1;
          return 0;
        } else {
          if (a[prop] < b[prop]) {
            return -1;
          }
          if (a[prop] > b[prop])
            return 1;
          return 0;
        }        
      }
    default:
  }
}

export const contacts = (state = [], action) => {
    switch (action.type) {
      case 'FETCH_CONTACT_SUCCESS':
        return [
          ...action.contacts
        ]
      case 'SORT_CONTACTS':
        if (action.field === 'id') action.contacts.reverse();
        else {
          let field = action.field === 'name' ? 'name.first' : action.field;
          action.contacts.sort(propComparator(field, action.method))
        }
        return [
          ...action.contacts
        ]
      default:
        return state
    }
  }