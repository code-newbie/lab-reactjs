import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
      <div>
          <NavLink to="/">Home</NavLink>&nbsp;|&nbsp;
          <NavLink to="/about">About</NavLink>&nbsp;|&nbsp;
          <NavLink to="/contact">Contact</NavLink>&nbsp;|&nbsp;
          <NavLink to="/map">Map</NavLink>
      </div>
    );
};

export default Navigation;