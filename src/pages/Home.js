import React, { useState, useEffect } from "react";
import { zIndex } from "tailwindcss/defaultTheme";

import "styles/scss/Home.scss";
import { ReactComponent as Stx } from "assets/svg/stx.svg";
import StxCustom from "assets/images/custom-stx.png";

function Home(props) {
  const { history } = props;
  const [isPageLoading, setIsPageLoading] = useState(true);
  useEffect(() => {
    setIsPageLoading(false);
  }, []);
  return (
    <div className="w-full">
      {isPageLoading ? (
        <>Loading</>
      ) : (
        <div className="w-full">
          <div className="w-full flex justify-center">
            <div className="w-full px-4 md:px-0 md:w-10/12 2xl:w-9/12">
              <div className=" py-12 md:py-24 lg:py-32 xl:py-32">
                <div className="grid gap-2 grid-cols-3 sm:grid-cols-5 xl:grid-cols-3 sm:gap-4">
                  <div className="w-full col-span-2 sm:col-span-2 xl:col-span-1 z-10">
                    <h1 className="text-6xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-wider">
                      <span className="block sm:whitespace-nowrap">
                        Stack
                        <span className="block" style={{ color: "#5546ff" }}>
                          {" "}
                          $STX
                        </span>
                      </span>
                      <span className="block">to earn</span>
                      <span className="text-secondary-600">more!</span>
                    </h1>
                  </div>
                  <div className="col-span-1 w-full h-full sm:col-span-3 xl:col-span-2">
                    <div className="h-full flex justify-end items-center">
                      <div className="flex">
                        <div className="hidden sm:block">
                          <StacksHero />
                        </div>
                        <div className="mx-3 lg:mx-4 xl:mx-6 hidden sm:block">
                          <p
                            className="text-primary-400 hero-equals sm:text-5xl md:text-7xl lg:text-6xl xl:text-7xl sm:mt-12 md:mt-10 lg:mt-14 xl:mt-13"
                            style={{ color: "#f7931a" }}
                          >
                            =
                          </p>
                        </div>
                        <div className="flex justify-center items-center bg-green-400z">
                          <div
                            className="hero-stacks-container stacked-result"
                            style={{ marginTop: "60px" }}
                          >
                            <div
                              className="hero-stacks"
                              style={{
                                zIndex: 4,
                              }}
                            >
                              <img
                                src={StxCustom}
                                alt="test"
                                className="custom-stack-logo"
                              />
                            </div>
                            <div
                              className="hero-stacks"
                              style={{
                                zIndex: 3,
                              }}
                            ></div>
                            <div
                              className="hero-stacks"
                              style={{
                                zIndex: 2,
                              }}
                            ></div>
                            <div
                              className="hero-stacks"
                              style={{
                                zIndex: 1,
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full mt-4">
                  <div className="sm:w-5/12">
                    <p className="font-semibold text-sm md:text-base">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                    <button className=" tra mt-4 px-3 py-2 bg-primary-600 h-full flex  items-center text-sm sm:text-base rounded-md">
                      Start Stacking
                    </button>
                  </div>
                </div>
              </div>
              <div className="inline-block pb-40">
                <div className=" text-center">
                  <h4 className=" text-4xl font-semibold text-primary-400">
                    Your key, your token
                  </h4>
                  <p className="text-base font-semibold mt-4">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-8 mt-20">
                  <div
                    className="col-span-1 text-center px-6 py-12"
                    style={{ backgroundColor: "#191b19" }}
                  >
                    <h4 className=" text-2xl font-semibold text-primary-400">
                      Non-custodial service
                    </h4>
                    <p className="text-sm mt-4">
                      Stacking App is a non-custodial stacking pool. We wont be
                      holding the Stacker`s
                      <span style={{ color: "#5546ff" }}> $STX</span> tokens in
                      order to earn, instead it is
                      <span className="text-primary-400"> locked-in</span> in
                      their wallets.
                    </p>
                  </div>
                  <div
                    className="col-span-1 text-center px-6 py-12"
                    style={{ backgroundColor: "#191b19" }}
                  >
                    <h4 className=" text-2xl font-semibold text-primary-400">
                      Secured and Transparent
                    </h4>
                    <p className="text-sm  mt-4">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English.
                    </p>
                  </div>
                  <div
                    className="col-span-1 text-center px-6 py-12"
                    style={{ backgroundColor: "#191b19" }}
                  >
                    <h4 className=" text-2xl font-semibold text-primary-400">
                      Lorem Ipsum
                    </h4>
                    <p className="text-sm  mt-4">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pb-40 w-full">
                <div className="md:grid grid-cols-2 gap-4">
                  <div>
                    <h4 className=" text-4xl font-semibold text-primary-400">
                      How does stacking work?
                    </h4>
                    <p className="text-sm mt-4">
                      Stacking involves Stackers locking their stx to a certain period without ever
                      leaving their wallet, therefore stackers
                      <span className="text-primary-400">
                        {" "}
                        dont need to transfer their stx to us
                      </span>
                      . Once we met the minimum threshold before the next cycle
                      starts, we could commit the <span className="text-customColor-stx">$STX</span>{" "} in the pool to start
                      earning.
                    </p>
                    <p className="text-sm mt-4">
                      Stacking is a critical part of the Stacks network. It
                      helps Stacks reach consensus, stay secure, and process
                      transactions. Stacking is part of the Proof of Transfer
                      consensus mechanism.
                    </p>
                  </div>
                  <div></div>
                </div>

                <div className="md:grid grid-cols-2 gap-4 mt-14">
                  <div></div>
                  <div className="">
                    <h4 className=" text-4xl font-semibold text-primary-400">
                      How do I claim my earnings?
                    </h4>
                    <p className="text-sm mt-4">
                      Every stacker`s earnings are first transferred to us by
                      bitcoin. We will distribute your earnings by <span className="text-customColor-stx">$STX</span>{" "} to your
                      wallets so you could get the maximum possible amount of
                      your earnings after the cycle ends.
                    </p>
                  </div>
                </div>

                <div className="md:grid grid-cols-2 gap-4 mt-14">
                  <div className="">
                    <h4 className=" text-4xl font-semibold text-primary-400">
                      How do I start?
                    </h4>
                    <p className="text-sm mt-4">
                      You can start stacking by delegating your STX to us and we'll do
                      the rest.
                    </p>
                    <a
                      href="/delegate"
                      onClick={(e) => {
                        e.preventDefault();
                        history.push("/instructions");
                      }}
                    >
                      <p className="text-base mt-4 underline text-secondary-500">
                        To delegate please follow the instructions
                      </p>
                    </a>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const StacksHero = () => {
  return (
    <div className=" w-full h-full flex items-center justify-center">
      <div className="flex items-center justify-center">
        <div className="hero-stacks-container " style={{ zIndex: 1 }}>
          <div
            className="hero-stacks-a stack-stx-5"
            style={{
              zIndex: 5,
            }}
          >
            <img src={StxCustom} alt="test" className="custom-stack-logo" />
          </div>
          <div
            className="hero-stacks-a stack-stx-4"
            style={{
              zIndex: 4,
            }}
          ></div>
          <div
            className="hero-stacks-a stack-stx-3"
            style={{
              zIndex: 3,
            }}
          ></div>
          <div
            className="hero-stacks-a stack-stx-2"
            style={{
              zIndex: 2,
            }}
          ></div>
          <div
            className="hero-stacks-a stack-stx-1"
            style={{
              zIndex: 1,
            }}
          ></div>
        </div>
        <div
          className="hero-stacks-container adjust center"
          style={{ zIndex: 3 }}
        >
          <div
            className="hero-stacks-a stack-stx-5"
            style={{
              zIndex: 5,
            }}
          >
            <img src={StxCustom} alt="test" className="custom-stack-logo" />
          </div>
          <div
            className="hero-stacks-a stack-stx-4"
            style={{
              zIndex: 4,
            }}
          ></div>
          <div
            className="hero-stacks-a stack-stx-3"
            style={{
              zIndex: 3,
            }}
          ></div>
          <div
            className="hero-stacks-a stack-stx-2"
            style={{
              zIndex: 2,
            }}
          ></div>
          <div
            className="hero-stacks-a stack-stx-1"
            style={{
              zIndex: 1,
            }}
          ></div>
        </div>
        <div
          className="hero-stacks-container adjust last"
          style={{ zIndex: 2 }}
        >
          <div
            className="hero-stacks-a stack-stx-5"
            style={{
              zIndex: 5,
            }}
          >
            <img src={StxCustom} alt="test" className="custom-stack-logo" />
          </div>
          <div
            className="hero-stacks-a stack-stx-4"
            style={{
              zIndex: 4,
            }}
          ></div>
          <div
            className="hero-stacks-a stack-stx-3"
            style={{
              zIndex: 3,
            }}
          ></div>
          <div
            className="hero-stacks-a stack-stx-2"
            style={{
              zIndex: 2,
            }}
          ></div>
          <div
            className="hero-stacks-a stack-stx-1"
            style={{
              zIndex: 1,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
