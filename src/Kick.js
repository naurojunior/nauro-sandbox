import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './Kick.css';

class Kick extends Component {
	render(){
		return(<div>
		        <Navbar />
		        <div className="container">
		        <div className="row">
		            <div className="col-lg-12 text-center">
		              <h1 className="mt-5">Nauro's Sandbox</h1>
		          	<p>Pequenos coices diários na vida que merecem ser relembrados e vistos sempre que possível</p>
	        		 </div>
		          </div>
		          <div className="row">
	        		<div className="col-lg-4 text-center">
		        		<iframe src="https://www.youtube.com/embed/jzyffOCemOo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		        	</div>
		        	<div className="col-lg-4 text-center">
		        		<iframe src="https://www.youtube.com/embed/KAo2nmVlfOA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		        	</div>
		        	<div className="col-lg-4 text-center">
		        		<iframe src="https://www.youtube.com/embed/9w3o9NHXqu0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		        	</div>
		        	</div>
		        </div>
		      </div>);
		}
}


export default Kick;
