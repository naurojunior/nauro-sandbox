import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

class Tech extends Component {
	render(){
		return(<div>
		        <Navbar />

		        <div className="container">
		          <div className="row">
		            <div className="col-lg-12 text-center">
		              <h1 className="mt-5">Techs!</h1>
		              <p className="lead">O que está sendo usado?</p>
		            </div>
		          </div>
		        <div className="row">
		            <div className="col-lg-12">
		              <h5>Front-End</h5>
		               <ul>
						  <li>ReactJS</li>
						  <li>Bootstrap CSS</li>
						  <li>Axios para consultas de API</li>
						  <li>Roteamento com react-router-dom</li>
		             	</ul>
		            </div>		            
		            <div className="col-lg-12">
		              <h5>Servidor / DevOps / Outros</h5>
		               <ul>
						  <li>Controle de versões com Git</li>
						  <li>Servidor no Google Cloud Compute Engine</li>
						  <li>Certificado do Let's Encrypt para garantir SSL, renovado automaticamente</li>
						  <li>Requisições HTTP redirecionando para HTTPS, para garantir segurança</li>
						  <li>Serviço NodeJS rodando com o forever servindo na porta 4000 (página coices)</li>
						  <li>Apache + PHP 7.2 (com HTTPS) servindo na porta 443</li>
						  <li>Scripts de deploy</li>
						  <li>Consumo excessivo de café + uma pitada de amor &#x1F499;</li>
		             	</ul>
		            </div>
		            <div className="col-lg-12">
		              <h5>Back-End</h5>
		               <ul>
						  <li>NodeJS retornando via REST/JSON os vídeos da página "coices"</li>
		             	</ul>
		            </div>
		          </div>
		        </div>
		      </div>);
		}
}


export default Tech;
