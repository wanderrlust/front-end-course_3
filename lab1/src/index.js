import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function List () {
  return (
    <div>
  <h1>Hedy Lamarr's Todos</h1>
  <img src="https://i.imgur.com/yXOvdOSs.jpg"  alt="Hedy Lamarr"  className="photo"/>
  <ul>
    <li>Invent new traffic lights</li>
    <li>Rehearse a movie scene</li>
    <li>Improve the spectrum technology</li>
  </ul>
  </div>
  )
}

root.render(
  <List />
);
