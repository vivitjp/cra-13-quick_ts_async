import React from 'react'
import { Provider } from 'react-redux';
import { store } from '../../stores/log/';
import Logs from './Log';  //CompoXXXCore:Local 任意名

const Component = () => {
  return (
    <Provider store={store}>
      <Logs />
    </Provider>);
}

export default Component;