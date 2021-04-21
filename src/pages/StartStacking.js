import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCycleInfo } from "utils/actions/cycleInfoActions";

import ProgressBar from "components/Custom/ProgressBar";

function thousands_separators(num) {
  var num_parts = num.toString().split(".");
  num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return num_parts.join(".");
}

function StartStacking(props) {
  const { fetchCycleInfo, cycleInfo, loadingCycleInfo, errorCycleInfo } = props;

  const test = async () => {
    fetchCycleInfo();
  };

  useEffect(() => {
    if (cycleInfo.length === 0 || loadingCycleInfo) test();
  }, []);

  useEffect(() => {
    console.log(cycleInfo);
  }, [cycleInfo]);
  return (
    <div className="w-full">
      <div className="w-full flex justify-center">
        <div className="w-full px-4 md:px-0 md:w-10/12 2xl:w-9/12">
          <div className="mt-4">
            <h4 className="text-primary-400 text-3xl font-bold">Pools</h4>
            <div className="grid grid-cols-2 gap-8 mt-4">
              <div
                className="col-span-1 px-6 pt-6 pb-10 rounded-2xl"
                style={{ backgroundColor: "#191b19" }}
              >
                <div className="flex justify-between items-center">
                  <h4 className="text-primary-900 font-semibold text-xl flex-1">
                    Pool 1
                  </h4>
                  <div>
                    <div className="py-1 px-4 rounded-full border-primary-500 border">
                      <p className="text-xs">Open for delegation</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mt-4">
                    <p className="text-sm">Locking Period</p>
                    <p className="text-sm text-primary-400 font-semibold mt-1">
                      3 Cycles
                    </p>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm">Cycles To Lock</p>
                    <p className="text-sm text-primary-400 font-semibold mt-1">
                      7 to 9 cycle
                    </p>
                  </div>

                  <div className="mt-4">
                    <p className="text-sm">Address</p>
                  </div>
                  <div className="mt-1 flex">
                    <input
                      className="text-gray-200 py-2 px-2 text-sm border border-gray-700 bg-opacity-0 bg-transparent focus:outline-none w-full xl:w-2/3"
                      value="SPDSYHDK0NWK9QDH4J2B65Z176FNG961CYAX715H"
                      id="pool-2"
                      type="text"
                      onChange={(e) => {}}
                    ></input>
                    <button
                      className="text-sm py-2 px-4 bg-secondary-500 focus:outline-none"
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
              <div
                className="col-span-1 px-6 pt-6 pb-10 rounded-2xl"
                style={{ backgroundColor: "#191b19" }}
              >
                <div className="flex justify-between items-center">
                  <h4 className="text-primary-900 font-semibold text-xl flex-1">
                    Pool 2
                  </h4>
                  <div>
                    <div className="py-1 px-4 rounded-full border-primary-500 border">
                      <p className="text-xs">Open for delegation</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mt-4">
                    <p className="text-sm">Locking Period</p>
                    <p className="text-sm text-primary-400 font-semibold mt-1">
                      6 Cycles
                    </p>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm">Cycles To Lock</p>
                    <p className="text-sm text-primary-400 font-semibold mt-1">
                      7 to 12 cycle
                    </p>
                  </div>

                  <div className="mt-4">
                    <p className="text-sm">Address</p>
                  </div>
                  <div className="mt-1 flex">
                    <input
                      className="text-gray-200 py-2 px-2 text-sm border border-gray-700 bg-opacity-0 bg-transparent focus:outline-none w-full xl:w-2/3"
                      value="SPDSYHDK0NWK9QDH4J2B65Z176FNG961CYAX715H"
                      id="pool-2"
                      type="text"
                      onChange={(e) => {}}
                    ></input>
                    <button
                      className="text-sm py-2 px-4 bg-secondary-500 focus:outline-none"
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
          <div className="py-4 mt-8">
            <CycleInfo
              loadingCycleInfo={loadingCycleInfo}
              cycleInfo={cycleInfo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const CycleInfo = (props) => {
  const { loadingCycleInfo, cycleInfo } = props;
  const handleStatus = (status) => {
    if (status === 1) {
      return <p className="font-semibold text-primary-400">Preparing</p>;
    }
    if (status === 2) {
      return <p className="font-semibold text-primary-400">On Going</p>;
    }
    if (status === 3) {
      return <p className="font-semibold text-primary-400">Finishing</p>;
    }

    return <p className="font-semibold text-primary-400">-</p>;
  };

  return (
    <div>
      <h4 className="text-primary-400 text-3xl  font-bold">
        Cycle Information
      </h4>
      <div className="grid grid-cols-3 gap-8 mt-4">
        <div
          className="col-span-1 px-6 pt-6 pb-10 rounded-2xl"
          style={{ backgroundColor: "#191b19" }}
        >
          <div className="flex items-center">
            <h4 className="text-primary-400 font-semibold text-xl flex-1">
              Current Cycle
            </h4>
            <p className="font-semibold"></p>
          </div>
          <div className="mt-4 text-sm">
            <div className="flex justify-between">
              <div>
                <p>Cycle Id</p>
              </div>
              <div>
                <p className="font-semibold text-primary-400">
                  {" "}
                  {loadingCycleInfo ? (
                    <>-</>
                  ) : (
                    cycleInfo.length !== 0 && cycleInfo[0].currentCycle
                  )}
                </p>
              </div>
            </div>
            <div className="flex justify-between mt-3">
              <div>
                <p>Status</p>
              </div>
              <div>
                {loadingCycleInfo ? (
                  <p className="font-semibold text-primary-400">-</p>
                ) : (
                  cycleInfo.length !== 0 &&
                  handleStatus(cycleInfo[0].currentCycleStatus)
                )}
              </div>
            </div>
            <div className="flex justify-between mt-3">
              <div>
                <p>Started At</p>
              </div>
              <div>
                <p className="font-semibold text-primary-400">
                  {loadingCycleInfo
                    ? "-"
                    : cycleInfo.length !== 0 &&
                      thousands_separators(cycleInfo[0].currentCycleStartedAt)}
                </p>
              </div>
            </div>
            <div className="flex justify-between mt-3">
              <div>
                <p>Ends At</p>
              </div>
              <div>
                <p className="font-semibold text-primary-400">
                  {loadingCycleInfo
                    ? "-"
                    : cycleInfo.length !== 0 &&
                      thousands_separators(cycleInfo[0].currentCycleEndAt)}
                </p>
              </div>
            </div>
            <div className="flex justify-between mt-3">
              <div>
                <p>Current Block Height</p>
              </div>
              <div>
                <p className="font-semibold text-primary-400">
                  {loadingCycleInfo
                    ? "-"
                    : cycleInfo.length !== 0 &&
                      thousands_separators(cycleInfo[0].currentBlockHeight)}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <ProgressBar
              showPercentage={true}
              percentage={
                loadingCycleInfo
                  ? 0
                  : Math.round(
                      cycleInfo.length !== 0 &&
                        ((cycleInfo[0].currentBlockHeight -
                          cycleInfo[0].currentCycleStartedAt) /
                          2100) *
                          100
                    )
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cycleInfo: state.cycleInfoReducer.cycleInfo,
  loadingCycleInfo: state.cycleInfoReducer.loadingCycleInfo,
  errorCycleInfo: state.cycleInfoReducer.errorCycleInfo,
});

export default connect(mapStateToProps, {
  fetchCycleInfo,
})(StartStacking);
