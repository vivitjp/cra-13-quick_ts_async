import React from 'react';
import Users from './components/users/'   //call index.tsx
// import CompoY from './components/compoY/CompoY'
// import CompoZ from './components/compoZ/CompoZ'

import './App.scss';

function App(): JSX.Element {
  return (
    <>
      <div className="header">HEADER</div>
      <div className="main">
        <div className="title">TITLE</div>
        <div className="sec_l">LEFT</div>
        <div className="body"><Users /></div>
        <div className="sec_r">RIGHT</div>
      </div>
      <div className="footer">FOOTER</div>
    </>
  );
}

export default App;