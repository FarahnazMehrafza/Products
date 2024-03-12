import React from 'react';

interface NavbarProps {
  title: string;
}

const Navbar: React.FC<NavbarProps> = ({ title }) => {
  return (
    <nav>
      <div className="navbar">
        <div className="navbar-brand">
          <span>{title}</span>
        </div>
        <div className="navbar-menu">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Addproduct</a></li>
            <li><a href="#">EditProduct</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
