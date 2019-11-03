import React from 'react';
import { Link } from 'react-router-dom';

const navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <Link className="navbar-brand" to="/">App</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbar">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default navbar;