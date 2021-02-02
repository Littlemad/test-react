import React from "react";
import { useHistory } from "react-router-dom";

const Header = () => {
const history = useHistory();

  return (
    <>
      <h1>Header</h1>
      <button onClick={() => history.push("/")}>click me</button>
    </>
  );
};

export default Header;
