import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MyVerticallyCenteredModal } from "./MyVerticallyCenteredModal";

function Movie ({image, title, ratingAvg, details}) {

    const [modalShow, setModalShow] = React.useState(false);

        return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${image}`} />
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                ✰ {ratingAvg}
            </Card.Text>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                    Ver detalles
            </Button>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                synopsis={details}
                modaltitle={title}
            />
            </Card.Body>
        </Card>
        )
    }
export {Movie}; 


