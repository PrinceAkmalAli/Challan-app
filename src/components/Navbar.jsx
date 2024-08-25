import React from "react";
import { Link } from "react-router-dom";
import style from "./css/Navbar.module.css";
import logo from "./images/lg.jpg";
import Button from "./Button";

export default function Navbar() {
  return (
    <div className={style.navMain}>
      <div className={style.navContent}>
        <div className={style.logo}>
          <img src={logo} height="100px" alt="logo" />
        
        </div>
        <div className={style.navLinks}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/details">Details</Link>
            </li>
            <li>
              <Link to="/update">Update</Link>
            </li>
      
          </ul>
        </div>
        <div className={style.button}>
          <Button text={'L O G I N'} />
        </div>
      </div>
    </div>
  );
}
