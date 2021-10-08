import React from 'react';
import Users from './components/users/'   //call index.tsx
import Logs from './components/logs/'
// import CompoZ from './components/compoZ/CompoZ'

import './App.scss';

function App(): JSX.Element {
  return (
    <>
      <div className="header">
        HEADER
      </div>
      <div className="main">
        <div className="title">
          TITLE
        </div>
        <div className="sec_l">
          <Users />
        </div>
        <div className="body">
          <Logs />
        </div>
        <div className="sec_r">
          RIGHT
        </div>
      </div>
      <div className="footer">
        FOOTER
      </div>
    </>
  );
}

export default App;