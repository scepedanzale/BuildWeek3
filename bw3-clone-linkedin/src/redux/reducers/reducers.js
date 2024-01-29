import React from 'react'
import {addUserProfile, addExperienceList} from '../actions/actions'


export const bigReducers = (state = [], action) => {

    switch (action.type) {
      case 'ADD_USER':
        return ({
          ...state,
          user: [action.payload]
        })
      case 'USER_EXPERIENCE':
      return ({
        ...state,
        experience: [action.payload]
      })
      case 'ADD_EXPERIENCE':
        return ({
          ...state,
          experience: [...state.experience, action.payload]
        })
        case 'DELETE_EXPERIENCE':
          return ({
            ...state,
            experience: [...state.experience.filter(e => e.id !== action.payload)]
          }) 
      default:
        break;
    }
    
    return state
}
