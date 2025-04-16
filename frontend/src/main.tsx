import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, Switch } from 'wouter'
import { Provider } from 'react-redux'

import store from './redux/store.ts'
import GlobalStyles from './pages/styles/Global'
import Catch from './pages/catch.tsx'
import App from './App.tsx'
import { Container } from './pages/styles/Commons'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <Switch>
        <Container>
          <Route path="/catch" component={Catch} />
          <Route path="/" component={App} />
        </Container>
      </Switch>
    </Provider>
  </StrictMode>
)
