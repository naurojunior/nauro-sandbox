import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

class Home extends Component {
	render(){
		return(<div>
		        <Navbar />

		        <div className="container">
		          <div className="row">
		            <div className="col-lg-12 text-center">
		              <h1 className="mt-5">Nauro's Sandbox</h1>
		              <p className="lead">É só um sandbox pra mim... Se você caiu aqui por curiosidade, é um engano, não tem nada, vá embora... xô... ¯\_(ツ)_/¯</p>
		            </div>
		          </div>
		        <div className="row">
		            <div className="col-lg-12 text-center">
		                <p><i>sand·box: "A shallow box or hollow in the ground partly filled with sand for children to play in."</i></p>
		                <p><img className="img-fluid" src="https://i.pinimg.com/originals/6b/b7/ed/6bb7ed87e2f041324a2d2e8c6fc70c8d.jpg" /></p>
		            </div>
		        </div>
		          <div className="col-lg-12">
		              <a target="_blank" href="https://www.facebook.com/naurojunior"><img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-facebook-32.png" /></a>
		          </div>
		          <div className="col-lg-12">
		              <i>P.S: Se você quiser me adicionar no Facebook, seja por curiosidade, seja pra me perguntar alguma coisa, vá em frente. Eu sou legal :D Falo besteiras aleatórias,
		              converso sobre QUALQUER assunto e faço comentários engraçados quando possível. Se quiser tomar uma cerveja comigo, eu pago uma rodada!</i>
		          </div>
		        </div>
		      </div>);
		}
}


export default Home;
