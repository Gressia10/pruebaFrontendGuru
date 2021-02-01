import * as types from './types'

//Search od bussines
export const search = (data) => ({ type: types.SEARCH, payload: data })

// all bussines
export const all = (data) => ({ type: types.ALL, payload: data })

// detail of bussines
export const detail = (data) => ({ type: types.DETAIL, payload: data })

//Write for the search
export const write = (data) => ({type: types.WRITE, payload: data})

//
export const before = () => ({type: types.BEFORE})

//For next page
export const after = () => ({type: types.AFTER})

