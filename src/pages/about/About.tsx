import * as React from 'react';
import { Link } from "react-router-dom";

import '../structure.scss';

export interface IAboutProps {
}

export default function About(props: IAboutProps): JSX.Element {
  return (
    <>
      <div className="header">
        <span>HEADER</span>
        <Link
          className="links"
          to={{
            pathname: "/Top",
            state: { fromDashboard: true }
          }}
        >About</Link>
      </div>
      <div className="body_main">
        <div className="title">
          TITLE on GitHub FROM PSEUDO-SERVER
        </div>
        <div className="sec_l">

        </div>
        <div className="body">

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