import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

class Changelog extends Component {
	render(){
		return(<div>
		        <Navbar />

		        <div className="container">
		          <div className="row">
		            <div className="col-lg-12 text-center">
		              <h1 className="mt-5">Changelog</h1>
		              <p className="lead">Changelog das PARADA</p>
		            </div>
		          </div>
		        <div className="row">
		            <div className="col-lg-12">
		              <p>Tracking do que eu mexo só pra eu não me perder:</p>
		               <ul>
						  <li>25/03/2019.2 - Instalação do Mosca, MongoDB e subindo servidor MQTT para automatização em casa</li>
						  <li>25/03/2019.1 - Um mês parado aprendendo a mexer com Arduino e NodeMCU</li>
						  <li>16/03/2019 - Adição de script para realizar crawling de posts do Tumblr</li>
						  <li>22/02/2019 - Alteração do serviço do NodeJS para buscar os vídeos de uma playlist do Youtube</li>
						  <li>13/02/2019.4 - Adição de uma página em construção absurdamente horrível do app! De alguma forma, criei um carinho nostálgico especial por ela :/</li>
						  <li>13/02/2019.3 - Adição de link no topo da página pro app.</li>
						  <li>13/02/2019.2 - Adição de certificado para "app.nauro.com.br"</li>
						  <li>13/02/2019.1 - Adição de domínio "app.nauro.com.br"</li>
						  <li>12/02/2019.4 - <s>Pensando sobre o paradoxo do Navio de Teseu ser aplicado sobre o cérebro humano, como a consciência emerge e como seria modificada aos poucos...</s> Vendo vídeo de cachorrinhos e gatinhos fofos.</li>
						  <li>12/02/2019.3 - Adição de rewrite de URL para evitar problemas de "not found" quando aberto uma subpágina (/changelog por exemplo)</li>
						  <li>12/02/2019.2 - Adição de um css separador no menu superior</li>
						  <li>12/02/2019.1 - Adição de página "techs"</li>
						  <li>11/02/2019.7 - Alteração da página para buscar as informações do servidor.</li>
						  <li>11/02/2019.6 - Criação de server com NodeJs para servir os links dos vídeos.</li>
						  <li>11/02/2019.5 - Adicionando coices, pra me lembrar sobre a vida e pensamentos que não deveriam nunca sair da cabeça</li>
						  <li>11/02/2019.4 - Lendo H.P. Lovecraft, questionando a existência desse site e da minha própria, enquanto eu poderia estar dormindo...</li>
						  <li>11/02/2019.3 - Adicionando "Por Que?" e "Changelog"</li>
						  <li>11/02/2019.2 - Adicionando rotas</li>
		                  <li>11/02/2019.1 - Adicionando Analytics</li>
		                  <li>08/02/2019.2 - Adicionando miniscript de deploy</li>
		                  <li>08/02/2019.1 - Convertendo pra ReactJS. Por enquanto o código é porco, mas pelo menos é react ¯\_(ツ)_/¯</li>
		                  <li>07/02/2019.6 - Adicionando esse código no git pra eu não pensar em tacar fogo no PC toda vez que edito ele. Clonagem ainda tá manual, porque o mundo não foi feito em um dia</li>
		                  <li>07/02/2019.5 - Adicionando link do Facebook pra caso um alienígena me abduza e eu esqueça quem eu sou... Ou só pra passar vergonha no futuro quando eu acessar isso daqui mesmo...</li>
		                  <li>07/02/2019.4 - Instalando PHPzão da Massa™, MySQL, Node, Npm, Composer, Git, Leiningen, Docker e essas coisa aí</li>
		                  <li>07/02/2019.3 - Chorando enquanto desliza pela parede por isso não tá no github e sendo feito deploy manual ainda.</li>
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


export default Changelog;
