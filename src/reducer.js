import * as types from './action/types'
import {combineReducers } from 'redux';

const initialState = {data: []};

// Pagination REDUCER
const paginationReducer = (state = 1, { type }) => {
    switch (type) {
      case types.BEFORE:
        if(state>1){
        return state - 1
        }else{
          return state
        }
      case types.AFTER:
        return state + 1
      default:
        return state
    }
}

const offset = (state = 1, {type}) => {
  switch (type) {
    case types.ALL:
      return state
    default:
      return state
  }
}

const fetch = (state = initialState, action ) => {
    switch (action.type) {
      case types.ALL:
        return { ...state, data:action.payload };
      default:
        return state
    }
}

const reducers = {
    pagination: paginationReducer,
    fetchs: fetch,
    offset: offset
}

export const mainReducer = combineReducers(reducers)


