import PropType from 'prop-types'
import { ThemeProvider } from 'next-themes'
import Layout from 'components/layout/layout'
import 'styles/globals.css'
import store from '../store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider attribute='class'>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  )
}

MyApp.propTypes = {
  Component: PropType.elementType.isRequired,
  pageProps: PropType.object.isRequired,
}

export default MyApp
