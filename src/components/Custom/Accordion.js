import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import classnames from "classnames";
import "styles/scss/components/accordions.scss";
import { Transition } from "@headlessui/react";
import classNames from "classnames";

function Accordion(props) {
  const { title, hint, show, message } = props;
  const [showHint, setShowHint] = useState(show ? true : false);

  return (
    <div>
      <div className="my-3 flex items-center">
        {title}
        <span className="ml-4 text-sm text-primary-400">
          <button
            onClick={() => {
              setShowHint(!showHint);
            }}
            className="hover:bg-gray-400 hover:bg-opacity-50 p-1 rounded-full focus:outline-none"
          >
            <FaChevronDown
              className={classNames(showHint ? "open" : "close")}
            />
          </button>
        </span>
      </div>
      {message && <div>{message}</div>}
      <div className={classnames("hint", showHint && "active-hint")}>
        {hint}
      </div>
    </div>
  );
}

export default Accordion;
