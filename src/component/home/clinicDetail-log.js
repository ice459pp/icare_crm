import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Search from "../component/home/search";
import { useParams } from "react-router-dom";
import { Button, Modal, Form } from "react-bootstrap";
import Modal_AddLog from "./log/modal_addLog";
// import ClinicDetailLog from "../component/home/clinic-list"
// const style = {
//     height: `300px`
// }
const ClinicDetailLog = () => {
  let params = useParams();
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    // console.log("ppapa");
    setShowModal(!showModal);
  };
  return (
    <Fragment>
      <section className="bg-white text-dark logCard">
        <div className="logCard_title">
          <div>阿民</div>
          <div className="logCard_title_dateStatus_PC">
            <div className="date">2023/03/06 9:30</div>
            <button className="btn btn-success text-white status">
              教育訓練
            </button>
          </div>
          <div className="logCard_title_dateStatus_PD">
            <button className="btn btn-success text-white status">
              教育訓練
            </button>
          </div>
        </div>
        <div className="date_PD">2023/03/06 9:30</div>
        <div className="logCard_content">
          經過與醫師討論後，決定先初次使用看看叫號功能，後續再與我們聯絡。
        </div>
        <div className="logCard_footer">
          2023/03/06 09:30 新增{" "}
          <FontAwesomeIcon
          className="fs-4"
            style={{"cursor":"pointer"}}
            onClick={handleModal}
            icon="fa-solid fa-pen-to-square"
          />
        </div>
      </section>

      <Modal
        className="radio-custom"
        show={showModal}
        onHide={handleModal}
        centered
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header className="bg-secondary text-white" closeButton>
          <Modal.Title>編輯log</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Modal_AddLog></Modal_AddLog>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            className="text-white w-25"
            onClick={handleModal}
          >
            送出
          </Button>
          <Button variant="secondary" onClick={handleModal}>
            取消
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};
export default ClinicDetailLog;
