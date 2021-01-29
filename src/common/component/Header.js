import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Header = () => {
const history = useHistory();

  useEffect(() => {
    console.log("head effect");
  });
  
  console.log("head");

  return (
    <>
      <h1>Header</h1>
      <button onClick={() => history.push("/")}>click me</button>
    </>
  );
};

export default Header;
