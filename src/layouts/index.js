import React from "react";

function Layouts(props) {
  const { children } = props;
  return (
    <div>
      <div className=" h-14" style={{ backgroundColor: "#272727" }}>
        <div className="flex justify-center h-full">
          <div className=" h-full py-3 w-full px-4 md:px-0 md:w-10/12 2xl:w-9/12">
            <div className=" h-full flex">
              <div>
                <p className="font-semibold text-lg">Stacking App</p>
              </div>
              <ul className="h-full flex  justify-end flex-1">
                <li className="px-2 cursor-pointer h-full flex  items-center text-sm sm:text-base">
                  Learn More
                </li>
                <li className="px-2 sm:ml-8 cursor-pointer bg-primary-600 h-full flex  items-center text-sm sm:text-base">
                  Start Stacking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}

export default Layouts;
