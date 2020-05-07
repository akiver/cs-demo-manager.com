import React, { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';

type Props = {
  to: string;
  children: ReactNode;
};

export const DocTabLink = ({ to, children }: Props) => {
  const location = useLocation();
  return (
    <li className={location.pathname.includes(to) ? 'is-active' : undefined}>
      <Link className="navbar-item" to={to}>
        {children}
      </Link>
    </li>
  );
};
