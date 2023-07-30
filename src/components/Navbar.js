import React from "react";

const handleIClick = (event) => {
  event.preventDefault();
  alert("This is a ReactJS project by Siddharth Beniwal !!");
};

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          My Text Styler
        </a>
        <li>
          <a
            className="nav-link active"
            aria-current="page"
            href="/about"
            onClick={handleIClick}
          >
            ⓘ
          </a>
        </li>
      </div>
    </nav>
  );
}
