import axios from 'axios';
import { useEffect,useState } from 'react';
import "./style.scss";
import { CSSTransition } from 'react-transition-group';
import { Alert, Form, Row, Col } from 'react-bootstrap';

import imgAereo from "./images/aereo.jpg"
import imgNavio from "./images/navio.jpg"
import imgRodovia from "./images/rodovia.jpg"
import Card from './components/Card';
import Header from './components/Header';
import Formlot from './components/FormCompra';
import LogarPage from './components/Login';

function App() {
 	const [changeCard, setChangeCard] = useState('');

	useEffect(() => {
		axios.get("http://localhost:52773/keytrs/transports/RodovSped").then(result => console.log(result));
	}, []);

	function perfilRed(){
		alert('PerfilRed');
	}
	function redRodoviario(){
		setChangeCard('Rodovia');
	}

	function redAquaviario(){
		setChangeCard('Navio');
	}

	function redAereo(){
		setChangeCard('Aereo');    
	}
	console.log(changeCard)

return (
    <>	
		<title>KEY Transportes</title>
		<div id="login">
			{/* <LogarPage /> */}
		</div>
        <div id="divtd">
			<Header />
			<div id="corpo">
				<div id="grid">
					<Row id="row w-100" >
						{(changeCard == 'Rodovia' || changeCard == '')  &&
							<Col xs="9" md="4" lg="4">
								<Card setbut={setChangeCard} mudabut={changeCard} but={redRodoviario} img={imgRodovia} title="Transporte Rodoviário" description="Transporte rodoviário de alta segurança com preços extremamente acessíveis, temos containers grandes, médios e pequenos além de ótimos motoristas." />
							</Col>
						}
						{(changeCard == 'Navio' || changeCard == '') &&
							<Col xs="9" md="4" lg="4">
								<Card setbut={setChangeCard} mudabut={changeCard} but={redAquaviario} img={imgNavio} title="Transporte Aquaviário" description="Transporte rodoviário de alta segurança com preços extremamente acessíveis, temos containers grandes, médios e pequenos além de ótimos motoristas."/>
							</Col>
						}
						{(changeCard == 'Aereo' || changeCard == '') &&
							<Col xs="9" md="4" lg="4">
								<Card setbut={setChangeCard} mudabut={changeCard} but={redAereo} img={imgAereo} title="Transporte Aéreo" description="Transporte rodoviário de alta segurança com preços extremamente acessíveis, temos containers grandes, médios e pequenos além de ótimos motoristas." />
							</Col>
						}
						{changeCard != '' &&
							<Col md="5" lg="8">
								<Formlot />
							</Col>
						}
					</Row>
				</div>
			</div>
		</div>
    </>
  );
}

export default App;
