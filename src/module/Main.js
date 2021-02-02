import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { spriteUrl } from "../common/helper/url";

const main = () => {
  const history = useHistory();
  const [storage, setStorage] = React.useState(
    localStorage.getItem("localStorageInput") || ""
  );

  useEffect(() => {
    localStorage.setItem("localStorageInput", storage);
  }, [storage]);

  const handleOnChange = (e) => {
    setStorage(e.target.value);
  };

  return (
    <>
      <h1>Main</h1>
      <button onClick={() => history.push("/head")}>Head</button>
      <br />
      <svg role="img" className="svg atls-add2" aria-label="some text for aria">
        <use className="xlink" href={`${spriteUrl}#atls-add2`} />
      </svg>
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
