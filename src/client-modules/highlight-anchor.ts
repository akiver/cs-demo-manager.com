import type { ClientModule } from '@docusaurus/types';

const className = 'anchor-highlight';

// Briefly highlight the element targeted by the URL hash.
// Useful when the target is near the bottom of a short page and can't be scrolled to the top of the viewport.
// The CSS :target pseudo-class can't be used because client-side navigations (history.pushState) don't update it.
function highlightHashTarget(hash: string) {
  if (!hash) {
    return;
  }

  let id: string;
  try {
    id = decodeURIComponent(hash.slice(1));
  } catch {
    return;
  }

  const element = document.getElementById(id);
  if (!element) {
    return;
  }

  element.classList.remove(className);
  // Force a reflow to restart the animation when the same anchor is targeted again.
  void element.offsetWidth;
  element.classList.add(className);
  element.addEventListener('animationend', () => element.classList.remove(className), { once: true });
}

const clientModule: ClientModule = {
  onRouteDidUpdate({ location, previousLocation }) {
    if (previousLocation && location.pathname === previousLocation.pathname && location.hash === previousLocation.hash) {
      return;
    }

    requestAnimationFrame(() => highlightHashTarget(location.hash));
  },
};

export default clientModule;
