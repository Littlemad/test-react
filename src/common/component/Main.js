import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const main = () => {
  const history = useHistory();
  const [storage, setStorage] = React.useState(
    localStorage.getItem("localStorageInput") || ""
  );

  useEffect(() => {
    console.log("main effect");
    localStorage.setItem("localStorageInput", storage);
  }, [storage]);

  console.log("main");

  const handleOnChange = (e) => {
    setStorage(e.target.value);
  };

  return (
    <>
      <h1>Main</h1>
      <button onClick={() => history.push("/head")}>Head</button>
      <br />
      <br />
      <form>
        <label>Name</label>
        <input
          name="name"
          value={storage}
          type="text"
          onChange={handleOnChange}
        />
      </form>
      <button onClick={() => setStorage("Pippo")}>Pippo</button>
    </>
  );
};

export default main;
