import React from 'react';

function Footer() {
  return (
    <div className="flex items-center justify-center h-20 text-center bg-clrPrimaryDark">
      <p>
        Made with ♥ by{' '}
        <a
          href="https://nikolagp.com"
          className="text-clrSecondary"
          target="_blank"
        >
          Nikola G.
        </a>{' '}
        using{' '}
        <a
          href="https://reactjs.org/"
          className="text-clrPrimary"
          target="_blank"
        >
          React
        </a>{' '}
        -{' '}
        <a
          href="https://tailwindcss.com/"
          className="text-clrPrimary"
          target="_blank"
        >
          TailwindCSS
        </a>{' '}
        -{' '}
        <a
          href="https://spoonacular.com/food-api"
          className="text-clrPrimary"
          target="_blank"
        >
          API
        </a>
      </p>
    </div>
  );
}

export default Footer;
