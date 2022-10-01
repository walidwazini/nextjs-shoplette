import '../styles/globals.css'
import { Provider } from 'react-redux'
import ReduxStore from '../store'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={ReduxStore} >

      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
