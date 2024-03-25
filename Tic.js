import React from "react";
import ReactDOM from "react-dom/client";
import Game from "./src/Game";
const TicApp = () => {
  return (
    <div>
      <Game />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<TicApp />);
