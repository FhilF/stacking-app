import React from "react";
import { poolAddress_3, poolAddress_6 } from "lib/constant";
import Guide1 from "components/Guides/Guide1";
import Guide2 from "components/Guides/Guide2";
import Guide3 from "components/Guides/Guide3";
import Guide4 from "components/Guides/Guide4";

import Accordion from "components/Custom/Accordion";

function Instructions(props) {
  const { history } = props;
  return (
    <div className="w-full">
      <div className="w-full flex justify-center">
        <div className="w-full px-4 md:px-0 md:w-10/12 2xl:w-9/12">
          <div className="grid grid-cols-1 xl:grid-cols-5 gap-8">
            <div className="col-span-1 xl:col-span-3">
              <div className=" py-4 lg:py-6">
                <h4 className=" text-4xl font-semibold text-primary-400">
                  Start stacking
                </h4>
                <p className="mt-2 text-sm text-gray-400">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <div className="mt-8">
                  <Guide1 />
                  <Guide2 />
                  <Guide3 />
                  <Guide4 />
                </div>
              </div>
            </div>
            <div className="col-span-1 xl:col-span-2">
              <div className=" py-4 lg:py-6">
                <h4 className=" text-4xl font-semibold text-primary-400">
                  Quick questions
                </h4>
                <div className="mt-8">
                  <Accordion
                    show={true}
                    title={
                      <p className="text-base font-semibold text-secondary-500">
                        What is stacking?
                      </p>
                    }
                    hint={
                      <div className="pb-6 text-sm text-gray-400">
                        <p className="">
                          Stacking is a critical part of the Stacks network. It
                          helps Stacks reach consensus, stay secure, and process
                          transactions. Stacking is part of the Proof of
                          Transfer consensus mechanism.
                        </p>

                        <p className="mt-2">
                          Stacking involves locking tokens temporarily in their
                          wallets. You can either choose stacking on your own or
                          stack with us on our pool. On the Stacks Blockchain,
                          the Stacking process runs in cycles. Each cycle lasts
                          approximately 2 weeks or 2100 Bitcoin blocks.
                        </p>
                        <p className="mt-2">
                          Read more about stacking.{" "}
                          <span className=" text-secondary-500">
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href="https://www.stacks.co/"
                              className="underline text-secondary-500"
                            >
                              stacks.co
                            </a>
                          </span>
                        </p>
                      </div>
                    }
                  />
                  <Accordion
                    title={
                      <p className="text-base font-semibold text-secondary-500">
                        What is cycle?
                      </p>
                    }
                    hint={
                      <div className="pb-6 text-sm text-gray-400">
                        <p className="">
                          Stacking requires to lock funds for{" "}
                          <span className=" text-primary-400">
                            up to 12 consecutive cycles + 1 cycle cool down.
                          </span>{" "}
                          As a reward, miners distribute bitcoin to those who
                          have stacked through those cycles.
                        </p>
                        <p className="mt-2">
                          For each cycle delegation, there's a 1 cycle cooldown
                          required. The more cycle you choose, the less cycle
                          cool down you have.
                        </p>
                        <p className="mt-2">
                          So for example delegated to our cycle 3 address. This
                          means your token is locked until 3 cycles. After 3
                          cycles your tokens are unlocked but you will have 1
                          cycle cool down to delegate again.
                        </p>
                        <p className="mt-2">
                          Note: You can create a new address and delegate from
                          there to skip the cooldown cycle
                        </p>
                      </div>
                    }
                  />

                  <Accordion
                    title={
                      <p className="text-base font-semibold text-secondary-500">
                        What are the risk?
                      </p>
                    }
                    hint={
                      <div className="pb-6 text-sm text-gray-400">
                        <p className="">
                          There is no risk in stacking your tokens. The purpose
                          of delegation is to erase the transferring of tokens
                          to earn.
                        </p>
                        <p className="">
                          We will not be holding any of your tokens, instead,
                          it's locked-in in your wallets while it's earning. We
                          will only be responsible for holding your earnings
                          while it's still locked in.
                        </p>
                      </div>
                    }
                  />

                  <Accordion
                    title={
                      <p className="text-base font-semibold text-secondary-500">
                        How do I claim my earnings?
                      </p>
                    }
                    hint={
                      <div className="pb-6 text-sm text-gray-400">
                        <p className="">
                          Earnings are distributed in{" "}
                          <span className="text-customColor-stx">$STX</span>{" "}
                          instead of bitcoin to maximize the earnings of a
                          stacker. They are transferred to your wallets after a
                          cycle ends
                        </p>
                      </div>
                    }
                  />
                </div>
                <div className="mt-8">
                  <button className="bg-primary-600 px-6 py-2 focus:outline-none">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Instructions;
