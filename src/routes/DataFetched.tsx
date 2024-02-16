import React from "react";
import { useHistory } from "react-router-dom";

export const DataFetched = () => {
  let { push } = useHistory();
  return (
    <div className="App">
      <header className="App-header">
        <p>Data fetched:</p>
        <button
          onClick={() => {
            push("/");
          }}
        >
          Home page
        </button>
      </header>
    </div>
  );
};
