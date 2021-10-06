import React from 'react'
import { Provider } from 'react-redux';
import { store } from './store';
import Xxxxx from './Xxxxx'

function CompoX() {
  return (
    <Provider store={store}>
      <Xxxxx />
    </Provider>);
}

export default CompoX;



