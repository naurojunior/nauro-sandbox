import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
	render(){
		return(<div>
		        <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
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
		              </ul>
		            </div>
		          </div>
		        </nav>

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
		        <div className="row">
		            <div className="col-lg-12">
		              <p>Tracking do que eu mexo só pra eu não me perder:</p>
		               <ul>
						          <li>11/02/2019 - Adicionando Analytics</li>
		                  <li>08/02/2019.2 - Adicionando miniscript de deploy</li>
		                  <li>08/02/2019.1 - Convertendo pra ReactJS. Por enquanto o código é porco, mas pelo menos é react ¯\_(ツ)_/¯</li>
		                  <li>07/02/2019.6 - Adicionando esse código no git pra eu não pensar em tacar fogo no PC toda vez que edito ele. Clonagem ainda tá manual, porque o mundo não foi feito em um dia</li>
		                  <li>07/02/2019.5 - Adicionando link do Facebook pra caso um alienígena me abduza e eu esqueça quem eu sou... Ou só pra passar vergonha no futuro quando eu acessar isso daqui mesmo...</li>
		                  <li>07/02/2019.4 - Instalando PHPzão da Massa™, MySQL, Node, Npm, Composer, Git, Docker e essas coisa aí</li>
		                  <li>07/02/2019.3 - Chorando enquanto desliza pela parede por isso não tá no github e sendo feito deploy automático ainda.</li>
		                  <li>07/02/2019.2 - Adicionando texto do sandbox e imagem</li>
		                  <li>07/02/2019.1 - Adicionando SSL e forçando https</li>
		                  <li>06/02/2019 - Adicionando esse template qualquer</li> 
		                  <li>05/02/2019 - Criando servidor pra fazer uns testes</li>
		             </ul>
		            </div>
		          </div>
		          <div className="col-lg-12">
		              <a target="_blank" href="https://www.facebook.com/naurojunior"><img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-facebook-32.png" /></a>
		          </div>
		        </div>
		      </div>);
		}
}


export default Home;
