import React, { ReactNode } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { useLocalePrefix } from '../hooks/use-locale-prefix';

type Props = {
  path: string;
  isActive: NavLinkProps['isActive'];
  children: ReactNode;
  onClick: () => void;
};

export const NavBarLink = ({ path, isActive, children, onClick }: Props) => {
  return (
    <NavLink
      className="navbar-item"
      activeClassName="is-active"
      to={useLocalePrefix(path)}
      isActive={isActive}
      onClick={onClick}
    >
      {children}
    </NavLink>
  );
};
