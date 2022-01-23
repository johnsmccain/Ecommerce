import React, { useState } from "react";
import { Search } from "@mui/icons-material";

function Navbar() {
  const [active, setActive] = useState(false);
  const [search, setSearch] = useState(false);

  return (
    <nav className="navbar container flex flex_jc-sp-b flex_ai-c ">
      <div className="logo">Logo</div>

      <div id={active ? "active" : "hide-for-mobile"} className="links ">
        <a className="link" href="/">
          Home
        </a>
        <a className="link" href="/">
          About
        </a>
        <a className="link" href="/">
          Contact
        </a>
        <a className="link" href="/">
          Account
        </a>
      </div>
      <div className="nav-control">
        <div className="hamburger" onClick={() => setActive(!active)}>
          <span class={` hamburger-line ${active && "hamburger-close"}`}></span>
          <span
            class={` hamburger-line  ${active && "hamburger-close"}`}
          ></span>
          <span
            class={` hamburger-line  ${active && "hamburger-close"}`}
          ></span>
        </div>
        <div className="search-box">
          {search && (
            <input
              type="search"
              className="search-input"
              placeholder="search..."
            />
          )}

          <Search onClick={() => setSearch(!search)} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
