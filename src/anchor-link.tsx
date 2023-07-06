import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  to: string;
};

const NAVBAR_HEIGHT = 60;

export const AnchorLink = ({ to }: Props) => {
  useEffect(() => {
    if (window.location.hash === '') {
      return;
    }

    const id = window.location.hash.replace('#', '');
    if (id !== to) {
      return;
    }

    const element: HTMLElement | null = document.getElementById(id);
    if (element === null) {
      return;
    }

    setTimeout(() => {
      element.scrollIntoView(true);
      window.scrollBy(0, -NAVBAR_HEIGHT);
    }, 10);
  }, [to]);

  return (
    <Link className="is-size-3" to={`#${to}`}>
      #
    </Link>
  );
};
