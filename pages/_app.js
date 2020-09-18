import '../styles/global.scss'
import AppProviders from '../context'

export default function App({ Component, pageProps }) {
  return (
    <AppProviders>
      <Component {...pageProps} />
    </AppProviders>
  )
}
