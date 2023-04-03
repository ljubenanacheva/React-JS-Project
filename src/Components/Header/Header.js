import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext.js";
import { useContext } from "react";

export const Header = () => {
  const { isAuthenticated, userEmail } = useContext(AuthContext);
  return (
    <header className="header-area">
      <div className="container">
        <div className="row d_flex">
          <div className=" col-md-3 col-sm-3">
            <div className="logo">
              <Link to="/">Landmarks of Bulgaria</Link>
            </div>
          </div>
          <div className="col-md-9 col-sm-9">
            <div className="navbar-area">
              <nav className="site-navbar">
                <ul>
                  <li>
                    <Link className="active" to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/catalog">Catalog</Link>
                  </li>
                  {!isAuthenticated && (
                    <>
                      <li>
                        <Link to="/login">Login</Link>
                      </li>
                      <li>
                        <Link to="/register">Register</Link>
                      </li>
                    </>
                  )}
                  {isAuthenticated && (
                    <>
                      <li>
                        <Link to="/create">Create Landmark</Link>
                      </li>
                      <li>
                        <Link to="/logout">Logout</Link>
                      </li>
                      <li className="d_none">
                        <a href="Javascript:void(0)">
                          <i className="fa fa-user" aria-hidden="true"></i>
                        </a>
                        <span>{userEmail}</span>
                      </li>
                    </>
                  )}
                  ;
                  <li className="d_none">
                    <a href="Javascript:void(0)">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
                <button className="nav-toggler">
                  <span></span>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
