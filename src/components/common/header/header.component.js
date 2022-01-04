import logo from "../../../icon.png";
import './header.component.css'
import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo"/>
        <div>HealthyKhao</div>
      </header>

    )
  }
}

export default Header