import { useState } from "react";
import Modal from 'react-bootstrap/Modal'
// import Graph from "./Graph";

export default function ViewDetailsButton(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const style = {
        cursor: "pointer"
    }

    return (
        <>
            <span onClick={handleShow} style={style} title="Click here for more details" className="float-end me-3"><i className="fal fa-info-circle"></i></span>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size="lg"
                scrollable={true}
            >
                <Modal.Header closeButton >
                    <Modal.Title>{props.header}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.component}
                </Modal.Body>
            </Modal>
        </>
    );
}