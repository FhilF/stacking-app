import React from "react";
import Accordion from "components/Custom/Accordion";

function Guide1() {
  return (
    <div>
      <Accordion title={<Title />} hint={<Hint />} />
    </div>
  );
}

const Title = () => {
  return (
    <p className="text-base text-secondary-500 font-semibold">
      <span className="mr-4 text-sm font-semibold text-gray-400">1.)</span>Open stacks wallet
    </p>
  );
};

const Hint = () => {
  return (
    <div className="pb-6">
      <p className="text-sm text-gray-400">
        No stacks wallet? here's a{" "}
        <span>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.hiro.so/wallet"
            className="underline text-secondary-500"
          >
            link
          </a>
        </span>{" "}
        to download one.
      </p>
    </div>
  );
};

export default Guide1;
