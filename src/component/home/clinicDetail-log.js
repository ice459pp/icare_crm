import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Search from "../component/home/search";
import { useParams } from "react-router-dom";
import { Button, Modal, Form } from 'react-bootstrap';

// import ClinicDetailLog from "../component/home/clinic-list"
// const style = {
//     height: `300px`
// }
const ClinicDetailLog = () => {
    // ClinicDetailLog13
    let params = useParams()
    // const [showModal, setShowModal] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const handleModal = () => {
        setShowModal(!showModal);
    };

    // const ModalHandler = () => {
    //     console.log("qqqwwweeerrrtttad")
    // }
    // const toggleModal = () => {
    //     console.log("qqwdqwdwa")
    //     setShowModal(!showModal);
    // };
    return (<Fragment>
        <div className="d-flex w-100 log mb-1">
            <div className="d-flex  flex-column w-100 ">
                <div className="d-flex radio-block">
                    <div className="input-group  px-2 ps-3 py-1 radio-custom">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input custom-control-input" type="radio" name="radio" id="radio1" />
                            <label className="form-check-label custom-control-label" for="radio1">初訪</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input custom-control-input" type="radio" name="radio" id="radio2" />
                            <label className="form-check-label custom-control-label" for="radio2">回訪</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input custom-control-input" type="radio" name="radio" id="radio2" />
                            <label className="form-check-label custom-control-label" for="radio2">教育訓練</label>
                        </div>
                    </div>
                    <div className=" w-25 d-flex justify-content-center align-items-center">哭哭哭</div>
                    <div className=" w-25 d-flex  justify-content-center align-items-center">2022/12/30</div>
                </div>
                <div className=" fs-6 px-1 ps-3 py-1">紀錄紀錄紀錄紀錄紀錄紀錄紀錄</div>
            </div>
            <button onClick={handleModal} className="btn openModalIcon"> <FontAwesomeIcon icon="far fa-eye" /></button>
        </div>
        <Modal className="radio-custom" show={showModal} onHide={handleModal} centered size="lg" aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header className="bg-secondary text-white" closeButton>
                <Modal.Title >沂河診所-詳細資料</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <section>
                    <div className="d-flex border-bottom py-1 modal-body-head ">
                        <div className="w-100 d-flex">
                            <div>拜訪時間 :</div>
                            <div className="px-3">2020/15/25</div>
                        </div>
                        <div className="w-100 d-flex">
                            <div>拜訪人 :</div>
                            <div className="px-3">齣齣齣</div>
                        </div>
                    </div>
                    <div className="border-bottom py-2 d-flex radio-custom">
                        <div >拜訪類別 :</div>
                        <div className="input-group" >
                            <div className="form-check form-check-inline custom-radio">
                                <input className="form-check-input custom-control-input"  type="radio" name="radio" id="radio1" />
                                <label className="form-check-label custom-control-label" for="radio1">初訪</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input custom-control-input" type="radio" name="radio" id="radio2" />
                                <label className="form-check-label custom-control-label" for="radio2">回訪</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input custom-control-input" type="radio" name="radio" id="radio2" />
                                <label className="form-check-label custom-control-label" for="radio2">教育訓練</label>
                            </div>
                        </div>

                    </div>
                </section>
                {/* <p>Modal Content Here</p> */}
                <Form.Label className="py-1 m-0">拜訪紀錄 :</Form.Label>
                <Form.Control as="textarea" rows={6} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleModal}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>

    </Fragment>)


    // list listItem
}
export default ClinicDetailLog