import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div className="navbar bg-primary text-primary-content">
      <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      <Link className="mr-2" to="/">
        Home
      </Link>
      <Link className="mr-2" to="/login">
        Login
      </Link>
      <Link className="mr-2" to="/resister">
        Resister
      </Link>
      {user ? (
        <>
          <p className="mr-2">{user.email} </p>
          <button onClick={handleLogOut} className="btn outline">
            sign out
          </button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
};

export default Header;
