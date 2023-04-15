import { ThemeContextProvider, LanguageContextProvider } from './context/'
import { Home } from './pages'
import Layout from './components/Layout/Layout'
import './App.css'

function App () {
  return (
    <LanguageContextProvider>
      <ThemeContextProvider>
        <Layout>
          <Home />
        </Layout>
      </ThemeContextProvider>
    </LanguageContextProvider>
  )
}

export default App
