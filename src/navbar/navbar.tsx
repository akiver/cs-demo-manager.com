import React from 'react';
import { match } from 'react-router-dom';
import { Location } from 'history';
import { FormattedMessage } from 'react-intl';
import { ReactComponent as GitHub } from '../svg/github.svg';
import { ReactComponent as Twitter } from '../svg/twitter.svg';
import { NavBarLink } from './navbar-link';
import { useRef } from 'react';

const LOCAL_PREFIX_LENGTH = 3; // slash + 2 chars locale

const isHomeRoute = (_match: match | null, location: Location): boolean => {
  return location.pathname.length === 1 || location.pathname.length === LOCAL_PREFIX_LENGTH;
};

const isActiveLink = (pathname: string, path: string): boolean => {
  return pathname.startsWith(path) || pathname.substring(LOCAL_PREFIX_LENGTH).startsWith(path);
};

export const Navbar = () => {
  const navMenuRef = useRef<HTMLDivElement | null>(null);
  const burgerRef = useRef<HTMLButtonElement | null>(null);

  const toggleMenuVisibility = () => {
    burgerRef.current?.classList.toggle('is-active');
    navMenuRef.current?.classList.toggle('is-active');
  };

  return (
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <button ref={burgerRef} onClick={toggleMenuVisibility} className="button navbar-burger" aria-label="Burger">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className="navbar-menu navbar-menu-centered" ref={navMenuRef}>
        <NavBarLink path="/" isActive={isHomeRoute} onClick={toggleMenuVisibility}>
          <FormattedMessage id="navbar.home" />
        </NavBarLink>
        <NavBarLink
          path="/docs"
          onClick={toggleMenuVisibility}
          isActive={(_match, location): boolean => {
            return isActiveLink(location.pathname, '/docs');
          }}
        >
          <FormattedMessage id="navbar.docs" />
        </NavBarLink>
        <NavBarLink
          path="/changelog"
          onClick={toggleMenuVisibility}
          isActive={(_match, location): boolean => {
            return isActiveLink(location.pathname, '/changelog');
          }}
        >
          <FormattedMessage id="navbar.changelog" />
        </NavBarLink>
        <NavBarLink
          path="/language"
          onClick={toggleMenuVisibility}
          isActive={(_match, location): boolean => {
            return isActiveLink(location.pathname, '/language');
          }}
        >
          <FormattedMessage id="navbar.language" />
        </NavBarLink>
        <NavBarLink
          path="/download"
          onClick={toggleMenuVisibility}
          isActive={(_match, location): boolean => {
            return isActiveLink(location.pathname, '/download');
          }}
        >
          <FormattedMessage id="navbar.download" />
        </NavBarLink>
        <a
          className="navbar-item"
          href="https://github.com/akiver/csgo-demos-manager"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <GitHub className="icon" fill="white" />
        </a>
        <a
          className="navbar-item"
          href="https://twitter.com/CSGODemoManager"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <Twitter className="icon is-medium" />
        </a>
      </div>
    </nav>
  );
};
