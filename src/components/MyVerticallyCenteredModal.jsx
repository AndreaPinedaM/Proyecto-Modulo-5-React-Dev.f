import * as React from 'react';
import {Button, Modal} from 'react-bootstrap';


function MyVerticallyCenteredModal(props) {
    return (
    <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>

        <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
                {props.modaltitle}
            </Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <p>
                {props.synopsis}
            </p>
        </Modal.Body>

        <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
    </Modal>
    );
}

export{MyVerticallyCenteredModal}