import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const main = () => {
  const history = useHistory();

  useEffect(() => {
    console.log("main effect");
  });
  console.log("main");

  return (
    <>
      <h1>Main</h1>
      <button onClick={() => history.push("/head")}>click me</button>
    </>
  );
};

export default main;
