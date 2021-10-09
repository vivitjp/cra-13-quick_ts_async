import * as React from 'react';
import { Link } from "react-router-dom";

import '../page_style_a.scss';

export interface IAbout {
}

export default function About(props: IAbout): JSX.Element {
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
        >Top</Link>
      </div>
      <div className="body_main">
        <div className="title">
          About Page
        </div>
        <div className="sec_l">

        </div>
        <div className="body">
          About Center
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