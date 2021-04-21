import React from "react";
import Accordion from "components/Custom/Accordion";
import StartStacking1 from "assets/images/start-stacking/start-stacking-1.png";
import StartStacking2 from "assets/images/start-stacking/start-stacking-2.png";
import StartStacking3 from "assets/images/start-stacking/start-stacking-3.png";
import StartStacking4 from "assets/images/start-stacking/start-stacking-4.png";
import StartStacking5 from "assets/images/start-stacking/start-stacking-5.png";

function Guide4() {
  return (
    <div>
      <Accordion title={<Title />} hint={<Hint />} message={<Message />} />
    </div>
  );
}

const Title = () => {
  return (
    <div>
      <p className="text-base text-secondary-500 font-semibold">
      <span className="mr-4 text-sm font-semibold text-gray-400">4.)</span>Start stacking
        your <span style={{ color: "#5546ff" }}>$STX </span>to our pool via
        delegation
      </p>
    </div>
  );
};

const Message = () => {
  return (
    <div>
      <p className="text-sm text-gray-400">
        Heres our list of pool addresses that you can delegate on
      </p>
      <div className="ml-6 mt-4">
        <div>
          <div>
            <p className="text-primary-400 text-lg font-semibold block">
              3 cycles
            </p>
            <div className="mt-2">
              <input
                className="text-gray-800 py-2 px-2 w-2/4 text-sm bg-white"
                value="SPDSYHDK0NWK9QDH4J2B65Z176FNG961CYAX715H"
                id="pool-1"
                type="text"
                onChange={(e) => {}}
              ></input>
              <button
                className="text-sm py-2 px-4 bg-primary-600 focus:outline-none"
                onClick={(e) => {
                  var copyText = document.getElementById("pool-1");
                  copyText.select();
                  copyText.setSelectionRange(0, 99999);
                  document.execCommand("copy");
                  alert("Copied the text: " + copyText.value);
                }}
              >
                Copy
              </button>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-primary-400 font-semibold text-lg">6 cycles</p>
            <div className="mt-2">
              <input
                className="text-gray-800 py-2 px-2 w-2/4 text-sm bg-white"
                value="SPDSYHDK0NWK9QDH4J2B65Z176FNG961CYAX715H"
                id="pool-2"
                type="text"
                onChange={(e) => {}}
              ></input>
              <button
                className="text-sm py-2 px-4 bg-primary-600 focus:outline-none"
                onClick={(e) => {
                  var copyText = document.getElementById("pool-2");
                  copyText.select();
                  copyText.setSelectionRange(0, 99999);
                  document.execCommand("copy");
                  alert("Copied the text: " + copyText.value);
                }}
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Hint = () => {
  return (
    <div className="mt-4 mb-8 px-8">
      <div className="pb-8">
        <p className="text-sm text-gray-400">
          Dont know to delegate? Here's our instruction to guide you.
        </p>
        <div className="mt-4">
          <p className="text-base font-semibold text-gray-200">Instructions</p>

          <div className="px-4">
            <div className="pt-6">
              <p className="text-lg">
                <span className="mr-4 text-primary-400 font-semibold">
                  Step #1
                </span>
                After transferring your tokens to your wallet, Open stacks and
                start stacking by pressing the button{" "}
                <span className="font-semibold">"Get started"</span> in the
                lower right side of the app
              </p>
              <img
                className="mt-2 w-full md:w-3/5 lg:w-9/12 xl:w-full 2xl:w-11/12"
                src={StartStacking1}
                alt="add-stx-1"
              />
            </div>
            <div className="pt-6">
              <p className="text-lg">
                <span className="mr-4 text-primary-400 font-semibold">
                  Step #2
                </span>
                To start stacking via delegation to our pool, choose the option{" "}
                <span className="font-semibold">"Stack with others"</span> to
                continue
              </p>
              <img
                className="mt-2 w-full md:w-3/5 lg:w-9/12 xl:w-full 2xl:w-11/12"
                src={StartStacking2}
                alt="add-stx-1"
              />
            </div>

            <div className="pt-6">
              <p className="text-lg">
                <span className="mr-4 text-primary-400 font-semibold">
                  Step #3
                </span>
                Copy the address of how many cycles you want to lock-in your{" "}
                <span className="text-customColor-stx">$STX</span>.
              </p>
              {/* <p className="text-sm text-gray-400 mt-2">What happens if selected the wrong address to delegate on</p> */}
            </div>

            <div className="pt-6">
              <p className="text-lg">
                <span className="mr-4 text-primary-400 font-semibold">
                  Step #4
                </span>
                Fill up the required details.
              </p>

              <p className="text-sm mt-2 font-semibold text-gray-300">
                Paste the address of the cycle you choose from and fill up how
                many <span className="text-customColor-stx">$STX</span> you want
                to lock in.
              </p>
              <img
                className="mt-2 w-full md:w-3/5 lg:w-9/12 xl:w-full 2xl:w-11/12"
                src={StartStacking3}
                alt="add-stx-1"
              />
              <img
                className="mt-4 w-full lg:w-4/5 xl:w-3/4 2xl:w-full"
                src={StartStacking4}
                alt="add-stx-1"
              />
            </div>

            <div className="pt-6">
              <p className="text-lg">
                <span className="mr-4 text-primary-400 font-semibold">
                  Step #5
                </span>
                Confirm your delegation. Make sure to confirm the inputs.
              </p>
              <img
                className="mt-2 w-full md:w-3/5 lg:w-9/12 xl:w-full 2xl:w-11/12"
                src={StartStacking5}
                alt="add-stx-1"
              />
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Guide4;
