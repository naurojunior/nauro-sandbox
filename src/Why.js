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
		              <h1 className="mt-5">Wooden Box</h1>
		              <p className="lead">Por que criar um site assim?</p>
		            </div>
		          </div>
		        <div className="row">
		            <div className="col-lg-12 text-center">
		               <iframe width="680" height="510" src="https://www.youtube.com/embed/ty49GG2MnyA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		            </div>
		            <div className="col-lg-12">
		        	<p>Porque é minha caixa de madeira! Eu me perguntei o que seria o melhor que eu poderia fazer, e aí resolvi
		        	criar um espaço sem compromisso, que eu pudesse testar qualquer tecnologia, pudesse ir criando aos poucos 
		        	sem cobranças, sem prazos, sem objetivos finais...</p>
		        	<p>O tipo de coisa que eu faria se eu tivesse todo o tempo do mundo e não precisasse
		        	fazer mais nada. Algo que talvez ninguém nunca irá ver, mas que eu pudesse mostrar meu potencial pra mim mesmo :) Algo que eu pudesse inventar o que for, mostrar que dados quiser, experimentar e ir melhorando devagarzinho.</p>
		        	<p><i>P.S: Se você por algum motivo do destino acabou caindo aqui e tem curiosidade, bem... Toda semana vai ter
		        	alguma atualização... Pode ser ruim? Pode. Pode ser pequena? Pode... mas é o que tem pra hoje. É uma demonstração apaixonada
		        	de programação que eu posso dar.</i></p>
		        	</div>
		        </div>
		        </div>
		      </div>);
		}
}


export default Why;
