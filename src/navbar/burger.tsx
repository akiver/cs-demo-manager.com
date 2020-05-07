import React from 'react';

document.addEventListener('DOMContentLoaded', function () {
  const $navbarBurger = document.querySelector<HTMLElement>('.navbar-burger');
  if ($navbarBurger !== null) {
    $navbarBurger.addEventListener('click', () => {
      const target = $navbarBurger.dataset.target as string;
      const $target = document.getElementById(target) as HTMLElement;
      $navbarBurger.classList.toggle('is-active');
      $target.classList.toggle('is-active');
    });
  }
});

export const Burger = () => {
  return (
    <div className="navbar-brand">
      <button className="button navbar-burger" data-target="navMenu" aria-label="Burger">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
};
