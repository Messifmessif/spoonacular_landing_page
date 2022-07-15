import { SiCodechef } from "react-icons/si";
import { FaPizzaSlice } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="Nav_wrapper">
        <div className="top_section">
          <SiCodechef className="logo" />
          <span className="title">Spoon</span>
        </div>

        {/* SEARCH SECTION  */}

        <div className="search_section">
          <input type="text" className="search" />
        </div>
        <div className="icons">
          <div className="main_icon_container">
            <FaPizzaSlice />
            {/* <p>italian</p> */}
          </div>
          <div className="main_icon_container">
            <FaHamburger />
            {/* <p>american</p> */}
          </div>
          <div className="main_icon_container">
            <FaPizzaSlice />
            {/* <p>american</p> */}
          </div>

          <div className="main_icon_container">
            <FaHamburger />
            {/* <p>american</p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
