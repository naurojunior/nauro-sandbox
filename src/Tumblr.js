import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

class Tumblr extends Component {
	render(){
		return(<div>
		        <Navbar />

		        <div className="container">
		          <div className="row">
		            <div className="col-lg-12 text-center">
		              <h1 className="mt-5">Tumblr!</h1>
		              <p className="lead">Ferramenta para buscar tags em tumblrs</p>
		            </div>
		          </div>
		        </div>
		      </div>);
		}
}


export default Tech;
