import React from 'react';
import { Credits } from './footer/credits';
import { TwitterLink } from './footer/twitter-link';
import { License } from './footer/license';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="columns">
          <div className="column is-full">
            <Credits />
            <TwitterLink />
            <License />
          </div>
        </div>
      </div>
    </footer>
  );
};
