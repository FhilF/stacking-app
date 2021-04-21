import React from "react";
import Accordion from "components/Custom/Accordion";

import CreateWallet1 from "assets/images/create-wallet/create-wallet-1.png";
import CreateWallet2 from "assets/images/create-wallet/create-wallet-2.png";
import CreateWallet3 from "assets/images/create-wallet/create-wallet-3.png";
import CreateWallet4 from "assets/images/create-wallet/create-wallet-4.png";
import CreateWallet5 from "assets/images/create-wallet/create-wallet-5.png";
import CreateWallet6 from "assets/images/create-wallet/create-wallet-6.png";

function Guide2() {
  return (
    <div>
      <Accordion title={<Title />} hint={<Hint />} />
    </div>
  );
}

const Title = () => {
  return (
    <p className="text-base text-secondary-500 font-semibold">
      <span className="mr-4 text-sm font-semibold text-gray-400">2.)</span>Sign in your wallet
    </p>
  );
};

const Hint = () => {
  return (
    <div className="mt-4 mb-8 px-8">
      <div className="pb-8">
        <p className="text-sm text-gray-400">
          Don't have a wallet? Don't worry we'll help you out! Just follow this
          instruction to acquire one.
        </p>
        <div className="mt-4">
          <p className="text-base font-semibold text-gray-200">Instructions</p>

          <div className="px-4">
            <div className="pt-6">
              <p className="text-lg">
                <span className="mr-4 text-primary-400 font-semibold">
                  Step #1
                </span>
                Open Stacks Wallet and create a new wallet.
              </p>
              <img
                className="mt-2 w-full md:w-3/5 lg:w-9/12 xl:w-full 2xl:w-11/12"
                src={CreateWallet1}
                alt="create-wallet-1"
              />
            </div>
            <div className="pt-6">
              <p className="text-lg">
                <span className="mr-4 text-primary-400 font-semibold">
                  Step #2
                </span>
                In creating a new wallet, choose the option "Create a software
                wallet".
              </p>
              <img
                className="mt-2 w-full md:w-3/5 lg:w-9/12 xl:w-full 2xl:w-11/12"
                src={CreateWallet2}
                alt="create-wallet-2"
              />
            </div>
            <div className="pt-6">
              <p className="text-lg">
                <span className="mr-4 text-primary-400 font-semibold">
                  Step #3
                </span>
                Your secret key will be displayed. Make sure to save your key,
                there's no way to recover your wallet once you lost it!
              </p>
              <img
                className="mt-2 w-full md:w-3/5 lg:w-9/12 xl:w-full 2xl:w-11/12"
                src={CreateWallet3}
                alt="create-wallet-3"
              />
            </div>
            <div className="pt-6">
              <p className="text-lg">
                <span className="mr-4 text-primary-400 font-semibold">
                  Step #4
                </span>
                Paste your key to verify that you already saved it.
              </p>
              <img
                className="mt-2 w-full md:w-3/5 lg:w-9/12 xl:w-full 2xl:w-11/12"
                src={CreateWallet4}
                alt="create-wallet-4"
              />
            </div>
            <div className="pt-6">
              <p className="text-lg">
                <span className="mr-4 text-primary-400 font-semibold">
                  Step #5
                </span>
                Set a new password. create a new wallet
              </p>
              <img
                className="mt-2 w-full md:w-3/5 lg:w-9/12 xl:w-full 2xl:w-11/12"
                src={CreateWallet5}
                alt="create-wallet-5"
              />
            </div>
            <div className="pt-6">
              <p className="text-lg">
                <span className="mr-4 text-primary-400 font-semibold">
                  Step #6
                </span>
                Once you're all done setting up your wallet it will direct you
                to your own wallet dashboard
              </p>
              <img
                className="mt-2 w-full md:w-3/5 lg:w-9/12 xl:w-full 2xl:w-11/12"
                src={CreateWallet6}
                alt="create-wallet-6"
              />
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Guide2;
