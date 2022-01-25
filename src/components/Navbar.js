import React from "react";

import logo from "../assets/images/logo.png";
import CustomButton from "../components/Button";

function Navbar(props) {
  return (
    <div>
      <nav className="guest_nav">
        <img height={70} src={logo} alt="logo" />
        <CustomButton
          containerStyle="post_button"
          textStyle="post_button_text"
          title="Logout"
          click={props.click}
        />
      </nav>
    </div>
  );
}
export default Navbar;
