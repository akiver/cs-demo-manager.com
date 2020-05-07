import React from 'react';

export const DonateButton = () => {
  return (
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
      <input type="hidden" name="cmd" value="_donations" />
      <input type="hidden" name="business" value="ys.renaud@gmail.com" />
      <input type="hidden" name="item_name" value="Improve CSGO Demos Manager" />
      <input
        type="image"
        src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
        name="submit"
        title="PayPal - The safer, easier way to pay online!"
        alt="Donate with PayPal button"
      />
      <img alt="" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
    </form>
  );
};
