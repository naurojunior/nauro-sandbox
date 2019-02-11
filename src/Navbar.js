import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
	render(){
		return(<nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
		          <div className="container">
		            <Link to="/" className="navbar-brand">Home</Link>
		            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
		              <span className="navbar-toggler-icon"></span>
		            </button>
		            <div className="collapse navbar-collapse" id="navbarResponsive">
		              <ul className="navbar-nav ml-auto">
		                <li className="nav-item active">
		                  <Link to="/why" className="nav-link">Por que?
		                    <span className="sr-only">(current)</span>
		                  </Link>
		                </li>
		                 <li className="nav-item active">
		                  <Link to="/kicks" className="nav-link">Coices
		                    <span className="sr-only">(current)</span>
		                  </Link>
		                </li>
		                <li className="nav-item active">
		                  <Link to="/changelog" className="nav-link">Changelog
		                    <span className="sr-only">(current)</span>
		                  </Link>
		                </li>
		              </ul>
		            </div>
		          </div>
		        </nav>);
		}
}


export default Navbar;
