import React from 'react';
import { Link } from "react-router-dom";

import Users from '../../components/users'   //call index.tsx
import Logs from '../../components/logs'
// import CompoZ from './components/compoZ/CompoZ'

import '../page_style_a.scss';

function Top(): JSX.Element {
  return (
    <>
      <div className="header">
        <span>HEADER</span>
        <Link
          className="links"
          to={{
            pathname: "/About",
            state: { fromDashboard: true }
          }}
        >About</Link>
      </div>
      <div className="body_main">
        <div className="title">
          TITLE on GitHub FROM PSEUDO-SERVER
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

export default Top;