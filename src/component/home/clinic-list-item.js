import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Search from "../component/home/search";
// import ClinicList from "../component/home/clinic-list"
import { useHistory, Link } from "react-router-dom";
import { Button, Modal, Form, Accordion } from "react-bootstrap";
import Modal_AddLog from "../home/log/modal_addLog";
import ClinicDetailLog from "./clinicDetail-log";
const ClinicListItem = (props) => {
  // ClinicListItem13
  let { item } = props;
  console.log(item, "itemmm");
  const goPath = useHistory(); //設常數接收useHistory()回傳的物件
  const pushClinicDetail = () => {
    goPath.push(`/clinic/${item.id}`);
  };
  const [showAddLogModal, setShowAddLogModal] = useState(false);
  const [showLogListModal, setShowLogListModal] = useState(false);
  // const [isOpen, setIsOpen] = useState(true);

  const handleAddLogModal = () => {
    // TODO API POST LOG (new|| edit)
    setShowAddLogModal(!showAddLogModal);
  };
  const handleLogListModal = () => {
    setShowLogListModal(!showLogListModal);
  };
  let qqq = [
    {
      id: "c1",
      name: "cxxx診所",
      phone: "0921231434",
      city: "台北市",
      district: "大安區",
      road: "瑞光路4段18號5-5",
      visitor_id: "dfasdfasdf",
      visitor_name: "阿民",
      visit_datetime: "2023/2/25",
      clinic_status: "可電訪",
    },
    {
      id: "c2",
      name: "家齊診所",
      phone: "0921231434",
      city: "台北市",
      district: "大安區",
      road: "阿民路4段18號5-5",
      visitor_id: "dfasdf",
      visitor_name: "龍哥",
      visit_datetime: "2023/2/25",
      clinic_status: "可回訪",
    },
    {
      id: "c3",
      name: "捷克診所",
      phone: "0921231434",
      city: "台北市",
      district: "大安區",
      road: "瑞光路4段18號5-5",
      visitor_id: "dfasdf",
      visitor_name: "大艾",
      visit_datetime: "2023/2/25",
      clinic_status: "結案",
    },
    {
      id: "c4",
      name: "高地植髮診所",
      phone: "0921231434",
      city: "台北市",
      district: "大安區",
      road: "阿民路4段18號5-5",
      visitor_id: "dfasedfsdf",
      visitor_name: "龍哥",
      visit_datetime: "2023/2/25",
      clinic_status: "可電訪",
    },
  ];
  return (
    <Fragment>
      <tr className="align-middle">
        <th data-th="診所名(機構代碼):" scope="row">
          <div>{item.name}</div>
          <div>{item.id}</div>
        </th>
        <td className="td-address" data-th="地址:">
          <section>
            <div>
              {item.city}/{item.district}
            </div>
            <div>{item.road}</div>
          </section>
        </td>
        <td data-th="電話:">{item.phone}</td>
        <td data-th="拜訪人:">{item.visitor_name}</td>
        <td data-th="狀態:">{item.clinic_status}</td>
        <td data-th="日期:">{item.visit_datetime}</td>
        <td data-th="" className="table-log">
          <Button
            onClick={handleLogListModal}
            className="btn-sm w-100 text-light"
            variant="success"
          >
            Log
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
        show={showLogListModal}
        onHide={handleLogListModal}
        centered
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header className="bg-secondary text-white" closeButton>
          <Modal.Title>log列表</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {qqq.map((item) => (
            <ClinicDetailLog key={item.id} item={item}></ClinicDetailLog>
          ))}
          {/* <Modal_AddLog action={"new"}></Modal_AddLog> */}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            className="text-white w-25"
            onClick={handleAddLogModal}
          >
            新增Log
          </Button>
          <Button variant="secondary" onClick={handleLogListModal}>
            取消
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        className="radio-custom"
        show={showAddLogModal}
        onHide={handleAddLogModal}
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
          <Modal_AddLog action={"new"}></Modal_AddLog>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            className="text-white w-25"
            onClick={handleAddLogModal}
          >
            送出
          </Button>
          <Button variant="secondary" onClick={handleAddLogModal}>
            取消
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );

  // list listItem
};
export default ClinicListItem;
