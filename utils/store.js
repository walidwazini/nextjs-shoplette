import Cookies from 'js-cookie'
import { createContext, useReducer } from 'react'

export const Store = createContext()

const initialState = {
  darkMode: Cookies.get('darkMode') === 'ON' ? true : false
}

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'DARK_MODE':
      return { ...state, darkMode: true }
    case 'LIGHT_MODE':
      return { ...state, darkMode: false }
    default:
      return state;
  }
}

export const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, initialState)
  const value = { state, dispatch }

  return <Store.Provider value={value} >
    {props.children}
  </Store.Provider>
}