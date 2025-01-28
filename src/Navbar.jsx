import React from 'react';
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { CiText } from "react-icons/ci";
import styles from "./Navbar.module.css";
function Navbar( { title, tabName, switchHandler, darkMode } ) {  
  return (
     <>
  <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
  <div className={`container-fluid ${darkMode ? styles.navbarDarkMode : styles.navbarLightMode}`}>
    
    <a className={`${styles.navbarTitle} ${darkMode ? styles.navbarDarkMode : styles.navbarLightMode}`} href="#">{title}<CiText /> </a>

    {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className={`nav-item ${styles.about}`}>
          <a style={{textDecoration:"none"}} className={`${styles.about} ${darkMode ? styles.navbarDarkMode : styles.navbarLightMode}`} aria-current="page" href="#">{tabName}</a>
        </li>
      </ul> */}
      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" value={darkMode} onChange={switchHandler} role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{darkMode ? "Disable" : "Enable"} Dark Mood {darkMode ? <MdDarkMode /> : <MdLightMode />
  } </label>
</div>
    </div>
  {/* </div> */}
</nav>
  </>
  )
}
export default Navbar;