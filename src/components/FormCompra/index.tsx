import "./styles.scss";
import { Button, Form, Row, Col } from 'react-bootstrap';

function Formlot() {

    return (
        <div className="divform">
            <Form id="form" className="w-100">
                <Row>
                    <Col md="6">
                        <Form.Group controlId="Nomes">
                            <Form.Label className="labels">Nome:</Form.Label>
                            <Form.Control type="text" placeholder="Seu nome" />
                        </Form.Group>
                    </Col>
                    <Col md="6">
                        <Form.Group controlId="Nomes">
                            <Form.Label className="labels">Sobrenome:</Form.Label>
                            <Form.Control type="text" placeholder="Seu sobrenome" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md="4">
                        <Form.Group controlId="CEPs">
                            <Form.Label className="labels">CEP.Origem:</Form.Label>
                            <Form.Control type="text" placeholder="CEP de origem" />
                        </Form.Group>
                    </Col>
                    <Col md="4">
                        <Form.Group controlId="CEPs">
                            <Form.Label className="labels">CEP.Destino:</Form.Label>
                            <Form.Control type="text" placeholder="CEP de destino" />
                        </Form.Group>
                    </Col>
                    <Col md="4">
                        <Form.Group controlId="Number">
                            <Form.Label className="labels">Número</Form.Label>
                            <Form.Control type="text" placeholder="Número do local" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-start">
                    <Col md="5">
                        <Form.Group controlId="Mails">
                            <Form.Label className="labels">Email:</Form.Label>
                            <Form.Control type="email" placeholder="Seu melhor email" />
                        </Form.Group>
                    </Col>
                    <Col md="3">
                        <Form.Group controlId="Mails">
                            <Form.Label className="labels">Tamanho:</Form.Label>
                            <Form.Select>
                                <option>Pequeno</option>
                                <option>Medio</option>
                                <option>Grande</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="primary" type="submit">Comprar</Button>
            </Form>
        </div>
    )
}
export default Formlot;