import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { browserHistory, Router, Route, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import { Provider } from 'react-redux'

import './stylesheets/main.scss'
import createSagaMiddleware from 'redux-saga'
import { reducers } from './reducers/index'
import { sagas } from './sagas/index'


import App from './components/App'
import Home from './pages/Home'
import UserEdit from './pages/UserEdit'
import NotFound from './pages/NotFound'

const sageMiddleware = createSagaMiddleware()
let middleware = applyMiddleware(routerMiddleware(browserHistory), sageMiddleware)
if (process.env.NODE_ENV !== 'production') {
  middleware = compose(middleware, window.devToolsExtension && window.devToolsExtension())
}
const store = createStore(reducers, middleware)
const history = syncHistoryWithStore(browserHistory, store)
sageMiddleware.run(sagas)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="user-edit(/:id)" component={UserEdit} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider >,
  document.getElementById('app'))