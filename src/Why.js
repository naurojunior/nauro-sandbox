import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

class Why extends Component {
	render(){
		return(<div>
		        <Navbar />

		        <div className="container">
		          <div className="row">
		            <div className="col-lg-12 text-center">
		              <h1 className="mt-5">Nauro's Sandbox</h1>
		              <p className="lead">Por que criar um site assim?</p>
		            </div>
		          </div>
		        <div className="row">
		            <div className="col-lg-12 text-center">
		                <p><i>sand·box: "A shallow box or hollow in the ground partly filled with sand for children to play in."</i></p>
		                <p><img className="img-fluid" src="https://i.pinimg.com/originals/6b/b7/ed/6bb7ed87e2f041324a2d2e8c6fc70c8d.jpg" /></p>
		            </div>
		        </div>
		        </div>
		      </div>);
		}
}


export default Why;
