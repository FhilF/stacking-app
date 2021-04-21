import React from "react";
import Accordion from "components/Custom/Accordion";
import AddStx1 from "assets/images/add-stx/add-stx-1.png";
import AddStx2 from "assets/images/add-stx/add-stx-2.png";
import AddStx3 from "assets/images/add-stx/add-stx-3.png";

function Guide3() {
  return (
    <div>
      <Accordion title={<Title />} hint={<Hint />} />
    </div>
  );
}

const Title = () => {
  return (
    <p className="text-base text-secondary-500 font-semibold">
      <span className="mr-4 text-sm font-semibold text-gray-400">3.)</span>Add{" "}
      <span style={{ color: "#5546ff" }}>$STX </span>to your wallet
    </p>
  );
};

const Hint = () => {
  return (
    <div className="mt-4 mb-8 px-8">
      <div className="pb-8">
        <p className="text-sm text-gray-400">
          Dont know where to get one? Here's a{" "}
          <span>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.stacks.co/#trade-stx"
              className="underline text-secondary-500"
            >
              list
            </a>
          </span>{" "}
          of crypto exchange company to exchange for stx before continuing.
        </p>

        <div className="mt-4">
          <p className="text-base font-semibold text-gray-200">Instructions</p>

          <div className="px-4">
            <div className="pt-6">
              <p className="text-lg">
                <span className="mr-4 text-primary-400 font-semibold">
                  Step #1
                </span>
                After getting <span>$STX</span>, withdraw your tokens to
                transfer it to your wallet. To transfer it to your own wallet,
                open Stacks Wallet and Receive Stx token.
              </p>
              <img
                className="mt-2 w-full md:w-3/5 lg:w-9/12 xl:w-full 2xl:w-11/12"
                src={AddStx1}
                alt="add-stx-1"
              />
            </div>
            <div className="pt-6">
              <p className="text-lg">
                <span className="mr-4 text-primary-400 font-semibold">
                  Step #2
                </span>
                Enter your password to reveal your <span>$STX</span> address
              </p>
              <img
                className="mt-2 w-full md:w-3/5 lg:w-9/12 xl:w-full 2xl:w-11/12"
                src={AddStx2}
                alt="add-stx-2"
              />
            </div>
            <div className="pt-6">
              <p className="text-lg">
                <span className="mr-4 text-primary-400 font-semibold">
                  Step #3
                </span>
                This will reveal your <span>$STX</span> address
              </p>
              <p className="text-xs text-gray-300">
                Note: In withdrawing your funds from other wallets. Memo is not
                yet required for Stacks Wallet, therefore you can proceed with
                it right away without filling the memo.
              </p>
              <img
                className="mt-2 w-full md:w-3/5 lg:w-9/12 xl:w-full 2xl:w-11/12"
                src={AddStx3}
                alt="add-stx-3"
              />
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Guide3;
