import React from "react";

function Footer() {
  console.log('FOOTER');
  return (
    <div className="text-gray-200 bg-background w-full border-t border-gray-500 px-3 py-4">
      <p>
        This webapplication uses{" "}
        <a
          href="https://www.coingecko.com/en"
          target="_blank"
          className="underline"
        >
          CoinGecko
        </a>{" "}
        API.
      </p>
      <p>
        Made by{" "}
        <a
          href="https://amini-nasab.vercel.app/about"
          target="_blank"
          className="font-georama tracking-tighter text-blue-700"
        >
          MAN
        </a>
      </p>
    </div>
  );
}

export default React.memo(Footer);
