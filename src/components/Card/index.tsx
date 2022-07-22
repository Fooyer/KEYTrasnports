import { AnyMxRecord } from "dns";
import "./styles.scss";

type ICard = {
    title: string;
    description: string;
    img: any;
	but: any;
	mudabut: any;
	setbut: any;
}

function Card({setbut,mudabut,but,title,description, img}: ICard) {

    function mudanca(){
		setbut('');
	}
    return (
        <div className='caixa m-auto mb-5'>
			<img src={img} className="imgrid" />
			<div className="escrita">
				<h2>{title}</h2>
				<p>{description}</p>
			</div>
			<div className={`${!mudabut? 'butgrid': 'cangrid'}`} onClick={!mudabut?but:mudanca}>
				<h4>{!mudabut? 'Comprar Agora': 'Cancelar Compra'}</h4>
			</div>
		</div>
    )
}
export default Card;