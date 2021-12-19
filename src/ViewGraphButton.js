import { useState } from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
// import Graph from "./Graph";
import Top100ChannelsGraph from "./Top100ChannelsGraph";

export default function ViewGraphButton() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="success" onClick={handleShow}>
                View Graph
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton />
                <Modal.Body>
                    <Top100ChannelsGraph />
                </Modal.Body>
            </Modal>
        </>
    );
}