import React from "react";

function Footer() {
  return (
    <div>
      <p
        style={{
          fontFamily: "cursive",
          position: "relative",
          bottom: "0",
          width: "100%",
          textAlign: "center",
        }}
      >
        Copyright &copy; {new Date().getFullYear()} SandeepAbbu
      </p>
    </div>
  );
}

export default Footer;
