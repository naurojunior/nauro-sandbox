import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './Kick.css';

import axios from 'axios';

class Kick extends Component {

	constructor(props) {
        super(props);
        this.state = {videos: []};
    }

    async componentDidMount() {
        const api = process.env.REACT_APP_API_URL;
        const response = await axios.get('https://nauro.com.br:4000/');
        const videos = response.data;

        this.setState({
            videos
        });
    }

	render(){
		return(<div>
		        <Navbar />
		        <div className="container">
		        <div className="row">
		            <div className="col-lg-12 text-center">
		              <h1 className="mt-5">Kicks!</h1>
		          	<p>Pequenos coices diários na vida que merecem ser relembrados e vistos sempre que possível</p>
	        		 </div>
		          </div>
		          <div className="row">
		          	{this.state.videos.map(video => (
		          		<React.Fragment key={video.id} >
			        	<div className="col-lg-4 text-center" >
			        		<iframe src={ "https://www.youtube.com/embed/" + video.id } frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
			        	</div>
			        	</React.Fragment>
		        	))}
		        	</div>
		        </div>
		      </div>);
		}
}


export default Kick;
