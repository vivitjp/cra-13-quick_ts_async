import React from 'react'
import { Provider } from 'react-redux';
import { store } from './store';
import Core from './CompoXXX';  //CompoXXXCore:Local 任意名

type Props = {
  keyword: string
}

const CompoX = (props: Props) => {
  return (
    <Provider store={store}>
      <Core {...props} />
    </Provider>);
}

export default CompoX;