import { useAuthContext } from "@/context/AuthContext";
import React from "react";
import { NavLink } from "react-router-dom";
const links = [
  { path: "/", text: "Home" },
  { path: "about", text: "About" },
  { path: "profile", text: "Profile" },
  { path: "login", text: "Login" },
];
const Navbar = () => {
  const { user, logout }: any = useAuthContext();
  const handleLogout = () => {
    logout();
  };
  return (
    <>
      <nav className="navbar">
        <ul>
          {links.map((link) => {
            return (
              <React.Fragment key={link?.text}>
                {link?.path === "login" ? (
                  user === "" && (
                    <li>
                      <NavLink
                        to={link.path}
                        className={({ isActive }) =>
                          isActive ? "active_class" : undefined
                        }
                      >
                        {link.text}
                      </NavLink>
                    </li>
                  )
                ) : link?.path === "profile" ? (
                  user !== "" && (
                    <li>
                      <NavLink
                        to={link.path}
                        className={({ isActive }) =>
                          isActive ? "active_class" : undefined
                        }
                      >
                        {link.text}
                      </NavLink>
                    </li>
                  )
                ) : (
                  <li key={link.text}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        isActive ? "active_class" : undefined
                      }
                    >
                      {link.text}
                    </NavLink>
                  </li>
                )}
              </React.Fragment>
            );
          })}
          {!user && (
            <li className="log-in">
              <span>Log in to edit to-dos</span>
            </li>
          )}
        </ul>
      </nav>
      {user && (
        <div className="logout">
          <p>{user}</p>
          {<button onClick={handleLogout}>Logout</button>}
        </div>
      )}
    </>
  );
};
export default Navbar;
