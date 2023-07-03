import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [currentURL, setCurrentURL] = useState("");

  useEffect(() => {
    setCurrentURL(window.location.pathname);
  }, []);

  return (
    <div className={currentURL === '/' ? 'banner' : ''}>
      <div className="navbar">
        <a href="/"><img src="/logo.png" className="logo" alt="Logo" /></a>
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
