import '../styles/globals.css'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { Provider } from 'react-redux'

import ReduxStore from '../store'

const reduxPersistor = persistStore(ReduxStore)

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={ReduxStore} >
      <PersistGate loading={null} persistor={reduxPersistor} >
        <Component {...pageProps} />

      </PersistGate>
    </Provider>
  )
}

export default MyApp
