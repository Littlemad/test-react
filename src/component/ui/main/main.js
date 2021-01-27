import React from "react";

function main() {
  return (
    <div>
      <p>Testing content</p>
      <svg className="svg close">
        <use xlinkHref="./svg/sprite.svg#atls-close" />
        test
      </svg>
    </div>
  );
}

export default main;
