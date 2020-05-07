import React, { useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

type Props = {
  to: string;
};

const NAVBAR_HEIGHT = 60;
const scroll = (el: HTMLElement): void => {
  el.scrollIntoView(true);
  window.scrollBy(0, -NAVBAR_HEIGHT);
};

export const AnchorLink = ({ to }: Props) => {
  // Scroll with a timeout as the dom may not be available on render
  // https://github.com/rafrex/react-router-hash-link/issues/13#issuecomment-533251165
  useEffect(() => {
    if (window.location.hash === '') return;

    const id = window.location.hash.replace('#', '');
    if (id !== to) return;

    const element: HTMLElement | null = document.getElementById(id);
    if (element === null) return;

    setTimeout(() => {
      scroll(element);
    }, 500);
  }, []);

  return (
    <Link className="is-size-3" to={`#${to}`} scroll={scroll}>
      #
    </Link>
  );
};
