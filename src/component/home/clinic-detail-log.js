import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Search from "../component/home/search";
import { useParams } from "react-router-dom";
import { Button, Modal, Form } from "react-bootstrap";
import Modal_AddLog from "./log/modal-add-log";

const ClinicDetailLog = (props) => {
  let { item, readonly } = props;
  let isEditFormal = false;
  if (readonly) {
    isEditFormal = false;
  } else {
    if (item.isEdit) {
      isEditFormal = true;
    } else {
      isEditFormal = false;
    }
  }
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    // 撈出redux LOG 資料的值，然後post給API 記得重製

    // TODOＡＰＩ　ＰＯＳＴ　ｅｄｉｔＬＯＧ
    setShowModal(!showModal);
  };
  return (
    <Fragment>
      <div>
        {/* 可以修改 */}
        {isEditFormal && (
          <section
            data-id={item.id}
            className="bg-white text-dark logCard"
            onClick={() => {
              props.onLogClick(item);
            }}
          >
            <div className="logCard_title">
              <div data-id={item.visitor_id}>{item.visitor_name}</div>
              <div className="logCard_title_dateStatus_PC">
                <div className="date">{item.visit_datetime}</div>
                <button className="btn btn-success text-white status  cursor-default">
                  {item.visit_category}
                </button>
              </div>
              <div className="logCard_title_dateStatus_PD">
                <button className="btn btn-success text-white status cursor-default">
                  {item.visit_category}
                </button>
              </div>
            </div>
            <div className="date_PD">{item.visit_datetime}</div>
            <div className="logCard_content">{item.content}</div>
            <div className="logCard_footer">{item.now_datetime} 新增 </div>
          </section>
        )}
        {/* 不可以修改 modal */}
        {!isEditFormal && (
          <section
            data-id={item.id}
            className={
              "bg-white text-dark logCard " + (readonly ? "readonly" : "")
            }
          >
            <div className="logCard_title">
              <div data-id={item.visitor_id}>{item.visitor_name}</div>
              <div className="logCard_title_dateStatus_PC">
                <div className="date">{item.visit_datetime}</div>
                <button className="btn btn-success text-white status  cursor-default">
                  {item.visit_category}
                </button>
              </div>
              <div className="logCard_title_dateStatus_PD">
                <button className="btn btn-success text-white status cursor-default">
                  {item.visit_category}
                </button>
              </div>
            </div>
            <div className="date_PD">{item.visit_datetime}</div>
            <div className="logCard_content">{item.content}</div>
            <div className="logCard_footer">{item.now_datetime} 新增 </div>
          </section>
        )}
      </div>
      {/* <Modal
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
          <Modal.Title>編輯log123</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Modal_AddLog readonly={false} action={"edit"}></Modal_AddLog>
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
      </Modal> */}
    </Fragment>
  );
};
export default ClinicDetailLog;
