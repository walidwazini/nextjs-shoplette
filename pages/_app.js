import '../styles/globals.css'
import { Provider as ReduxProvider } from 'react-redux'
import { SnackbarProvider } from 'notistack';
import ReduxStore from '../store'

function MyApp({ Component, pageProps }) {
  return (
    <SnackbarProvider
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      autoHideDuration={2000}
    >
      <ReduxProvider store={ReduxStore} >
        <Component {...pageProps} />
      </ReduxProvider>
    </SnackbarProvider>
  )
}

export default MyApp
