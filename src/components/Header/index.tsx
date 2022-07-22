import "./styles.scss";
import { CSSTransition } from 'react-transition-group';
import logow from "../../images/logow.svg"
import { useEffect,useState } from 'react';


function Header({}) {
    const [showMessage, setShowMessage] = useState(false);

	function logoutRed(){
		sessionStorage.removeItem("user");
		window.location.reload();
	}
    return (
		
		<div>
			<header id="header">
				<img src={logow} id="logo" />
				<div id="menu">
					<div className={`menu-btn ${showMessage ? "open" : ""}`} id="menuzin" data-id="1" onClick={() => showMessage ? setShowMessage(false) : setShowMessage(true)}>
						<div className="menu-btn__burger"></div>
					</div>
				</div>
			</header>
			<CSSTransition
			in={showMessage}
			timeout={500}
			classNames="alert"
			unmountOnExit
			>
			<div>
				<div id="menubox">
					<div className="opt">
						<h3>Perfil</h3>
					</div>
					<div className="opt">
						<h3>Perfil</h3>
					</div>
					<div className="opt">
						<h3>Perfil</h3>
					</div>
					<div className="opt">
						<h3>Perfil</h3>
					</div>
					<div className="opt" onClick={logoutRed}>
						<h3>Logout</h3>
					</div>
				</div>
			</div>
			</CSSTransition>
		</div>
    )
}
export default Header;