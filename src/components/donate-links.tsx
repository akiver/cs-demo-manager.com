import React from 'react';

export function DonateLinks() {
  return (
    <div className="flex items-center gap-x-2">
      <a href="https://github.com/sponsors/akiver" className="button button--secondary" target="_blank">
        Donate on Github
      </a>

      <a
        href="https://www.paypal.com/donate/?business=4K9LM2PMM8D3E&no_recurring=0&item_name=Thank+you%21+Your+donation+is+greatly+appreciated.&currency_code=EUR"
        className="button button--secondary"
        target="_blank"
      >
        Donate with Paypal
      </a>

      <a href="https://donate.stripe.com/28o3dW4bh7H21Ms144" className="button button--secondary" target="_blank">
        Donate with Stripe
      </a>
    </div>
  );
}
