import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/navbar.css';

function Navbar() {
  const itemCount = useSelector(state => state.mine.items.length);

  return (
    <nav className="navbar">
      <div className="nav-content">
        <h1>My App</h1>
        <div className="mine-counter">
          Mine Items: <span className="counter">{itemCount}</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;