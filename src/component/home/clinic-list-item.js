import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Search from "../component/home/search";
// import ClinicList from "../component/home/clinic-list"
import { useHistory, Link } from "react-router-dom";
import { Button, Modal, Form, Accordion } from "react-bootstrap";
import Modal_AddLog from "../home/log/modal_addLog";
const ClinicListItem = (props) => {
  // ClinicListItem13
  let { item } = props;
  const goPath = useHistory(); //設常數接收useHistory()回傳的物件
  const pushClinicDetail = () => {
    console.log("qwqwedqed");
    goPath.push(`/clinic/${item.id}`);
  };
  const [showModal, setShowModal] = useState(false);
  // const [isOpen, setIsOpen] = useState(true);

  const handleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <Fragment>
      <tr className="align-middle">
        <th data-th="診所名(機構代碼):" scope="row">
          <div>沂河診所</div>
          <div>1115127</div>
        </th>
        <td className="td-address" data-th="地址:">
          <section>
            <div>台北市/大安區</div>
            <div>瑞光路4段18號5-5</div>
          </section>
        </td>
        <td data-th="電話:">(02)5566-8844</td>
        <td data-th="拜訪人:">嗚嗚嗚</td>
        <td data-th="狀態:">可回訪</td>
        <td data-th="日期:">2022/09/25</td>
        <td data-th="" className="table-log">
          <Button
            onClick={handleModal}
            className="btn-sm w-100 text-light"
            variant="success"
          >
            Log +
          </Button>{" "}
        </td>
        <td className="buttonIcon table-more">
          <button
            onClick={pushClinicDetail}
            className="btn w-100 btn-sm btn-dark"
          >
            更多...
          </button>
        </td>
      </tr>

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
          <Modal.Title>新增log</Modal.Title>
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

  // list listItem
};
export default ClinicListItem;
