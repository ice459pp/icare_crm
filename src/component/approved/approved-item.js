import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import "../scss/home.scss"

import { Button, Modal, Form, Card, Collapse } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
// import Collapse from 'react-bootstrap/Collapse';
const modalBorderStyle = {
    borderBottom: `2px dashed gray`
}
const tableBorderStyle = {
    borderBottom: `2px dashed black`
}
function num(index) {
    if (index % 2 === 0) {
        return 'bg-light';
        console.log("偶數")
    } else {
        return 'bg-warning';
        console.log("基數數")
    }
}
const ApprovedItem = (props) => {
    let { item, index } = props
    // console.log(index,"proppsa")
    const [showModal, setShowModal] = useState(false);
    const [isOpen, setIsOpen] = useState(true);

    const handleModal = () => {
        setShowModal(!showModal);
    };
    const [open, setOpen] = useState(false);
    let styles = num(index, "qqq")
    return (<Fragment>
        <tr className={`align-middle ${styles} `} >
            <th scope="row">
                <div>沂河診所</div>
                <div>1115127</div>
            </th>
            <td>
                2022/15/60
                {/* <div>
                    <div>台北市/大安區</div>
                    <div>瑞光路4段18號5-5</div>
                </div> */}
            </td>
            <td>嚕嚕嚕哩</td>
            <td>待核可</td>
            <td className="text-center"><div onClick={handleModal} className="btn btn-primary btn-sm fs-6"> <FontAwesomeIcon icon="far fa-eye" /></div>
            </td>
            <td className="text-center"> <div className="btn btn-secondary btn-sm fs-6"><FontAwesomeIcon icon="fas fa-cog" /></div></td>
            <td className=""> <div className="btn btn-success btn-sm fs-6 w-100"> <FontAwesomeIcon icon="fas fa-check" /></div></td>
        </tr>
        <tr className={`align-middle ${styles} `} style={tableBorderStyle}>
            <td colSpan={7} class="">紀錄紀錄紀錄紀錄紀錄紀錄</td>
        </tr>




        <>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                className="list_btn"
            >
                click
            </Button>
            <Collapse in={open} className="list-collapse">
                <div id="example-collapse-text">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                    terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                    labore wes anderson cred nesciunt sapiente ea proident.
                </div>
            </Collapse>
        </>





        <Modal show={showModal} onHide={handleModal} centered aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton className="bg-secondary text-light">
                <Modal.Title>沂河診所(12312315646)</Modal.Title>
            </Modal.Header>
            <Modal.Body className="pt-0">
                <section>
                    <div className="d-flex flex-column align-items-center py-1 " style={modalBorderStyle}>
                        <div className="w-100 d-flex">
                            <div>拜訪時間 :</div>
                            <div className="px-3">2020/15/25</div>
                        </div>
                        <div className="w-100 d-flex">
                            <div>拜訪人 :</div>
                            <div className="px-3">齣齣齣</div>
                        </div>
                    </div>
                </section>
                <Form.Label className="py-1 m-0">拜訪紀錄 :</Form.Label>
                <Form.Control as="textarea" rows={6} />
            </Modal.Body>
            <Modal.Footer >
                <Button className="w-25" variant="success" onClick={handleModal}>
                    <FontAwesomeIcon icon="fas fa-check" />
                </Button>
                <Button className="w-25" variant="secondary" onClick={handleModal}>
                    離開
                </Button>
            </Modal.Footer>
        </Modal>
    </Fragment>)

}
export default ApprovedItem