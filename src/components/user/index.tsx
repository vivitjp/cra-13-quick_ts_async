import React from 'react'
import { Provider } from 'react-redux';
import { store } from '../../stores/user';
import Users from './Users';  //CompoXXXCore:Local 任意名

const Component = () => {
  return (
    <Provider store={store}>
      <Users />
    </Provider>);
}

export default Component;