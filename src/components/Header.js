import React from "react";
import Paper from "@material-ui/core/Paper";
import "./Header.css";
function Header() {
  return (
    <Paper style={{ padding: "10px", display: "flex" }} elevation={3}>
      <img
        style={{ width: "50px" }}
        src="https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png"
      ></img>
      <h1 style={{ fontFamily: "cursive" }} className="site-name">
        React App
      </h1>
    </Paper>
  );
}

export default Header;
