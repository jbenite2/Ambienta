import React from "react";

export default function Navbar() {
  return (
    <div className="banner">
      <div className="navbar">
        <a href="/"><img src="/logo.png" className="logo" /></a>
        <ul className="nav">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="#">Projects</a></li>
        </ul>
      </div>
    </div>
  );
}
