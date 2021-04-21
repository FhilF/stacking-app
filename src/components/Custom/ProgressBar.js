import React from "react";
import "styles/scss/components/progressbar.scss";
import classnames from "classnames";

function ProgressBar(props) {
  const { percentage, color, showPercentage } = props;
  return (
    <div className="progress-bar relative">
      <Filler percentage={percentage} color={color} />
      {showPercentage && (
        <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center">
          <p className="text-xs text-gray-200">{`${percentage}%`}</p>
        </div>
      )}
    </div>
  );
}

const Filler = (props) => {
  const { percentage, color } = props;
  return (
    <div
      className={classnames("filler", color ? color : "bg-secondary-500")}
      style={{ width: `${percentage}%` }}
    ></div>
  );
};

export default ProgressBar;
