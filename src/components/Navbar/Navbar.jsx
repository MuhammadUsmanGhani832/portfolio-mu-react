import { NavLink } from "react-router-dom";
import "./navbar.css";
import { IoMenuSharp } from "react-icons/io5";

const Navbar = () => {
  const openMenu = () => {
    const content = document.getElementById("content");
    content.style.right = 0;
  };
  const closeMenu = () => {
    const content = document.getElementById("content");
    content.style.right = "-400px";
  };
  return (
    <>
      <nav className="navbar padding_section">
        <div className="logo">
          <h1>&#60;UR/&#62;</h1>
        </div>
        <IoMenuSharp className="menuOpen" onClick={() => openMenu()} />
        <div className="content" id="content">
          <button className="menuCross" onClick={closeMenu}>
            X
          </button>
          <div className="links">
            <NavLink className="link">Home</NavLink>
            <NavLink className="link">Projects</NavLink>
          </div>
          <div className="btn">
            <button>Download CV</button>
          </div>
        </div>
      </nav>
      <div className="divider"></div>
    </>
  );
};

export default Navbar;
