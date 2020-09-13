import React, { Fragment } from 'react'
import { Provider } from 'react-redux'
import './App.css'
import Rotas from './rotas/Rotas'
import store from './config/store'

function App() {
  return (
    <Provider store={store}>
      <Fragment >
        <Rotas />
      </Fragment>
    </Provider>
  );
}

export default App


