import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-primary text-primary-content">
      <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      <Link className="mr-2" to="/">
        Home
      </Link>
      <Link className="mr-2" to="/login">
        Login
      </Link>
      <Link to="/resister">Resister</Link>
    </div>
  );
};

export default Header;
