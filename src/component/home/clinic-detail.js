import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Search from "../component/home/search";
import { useParams } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
// import ClinicDetail from "../component/home/clinic-list"
import ClinicDetailLog from "./clinicDetail-log";
import Modal_ClinicInformation from "./inform/Modal_ClinicInformation";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import HomeIcon from "../icon/Home_icon";
import PhoneIcon from "../icon/Phone_icon";
import Modal_AddLog from "./log/modal_addLog";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import PaginationUI from "./Pagination";
let arrayLog = [
  {
    id: "qwdqwqwde",
    name: "sdssaf",
  },
  {
    id: "qwdqwqwdwqeqweqweqe",
    name: "sdssaf",
  },
  {
    id: "qwdqwqwderqwwqqwrqwerqe",
    name: "sdssaf",
  },
  {
    id: "qwdqwqwdqwerqwere",
    name: "sdssaf",
  },
  {
    id: "qwdqwqwdffffffffffe",
    name: "sdssaf",
  },
];

const ClinicDetail = () => {
  // ClinicDetail13
  let params = useParams();
  const [informModalShow, setInformModalShow] = useState(false);
  const [logSearch, setLogSearch] = useState("");
  const logSearchHandler = (value) => {
    // if (!value.trim()) {
    //   return;
    // }
    let valueTrim=value.trim()
    setLogSearch(valueTrim);
    console.log(logSearch, "logSearch", value, "value");
  };
  // const ref = useRef(initialValue)
  const handleInformModaClose = () => setInformModalShow(false);
  const handleInformModaShow = () => setInformModalShow(true);
  const [logModalShow, setLogModalShow] = useState(false);

  const handleLOGModalClose = () => setLogModalShow(false);
  const handleLOGModalShow = () => setLogModalShow(true);
  return (
    <Fragment>
      <div className="w-100 padding-RWD">
        <div className="py-2 w-100">
          {/* <div className="h5 text-dark fw-bolder">基本資料:</div> */}
          <div className="w-100 bg-white  inform">
            <section className="clinicName">
              <div className="h3 fw-bolder  text-primary">愛管家診所</div>
              <div className="h3 fw-bolder code">19293848</div>
            </section>
            <section className="d-flex align-items-center mt-1">
              <div className="h5   text-dark">
                <HomeIcon></HomeIcon>
              </div>
              <div className="h5  ps-3 code">台北市內湖區陽光街321巷</div>
            </section>
            <section className="d-flex align-items-center mt-1 mb-2 ">
              <div className="h5   text-dark">
                <PhoneIcon></PhoneIcon>
              </div>
              <div className="h5  ps-3 text-info">0912345678</div>
            </section>
            <div className="line"></div>
            <section className=" card">
              <div className="card-item">
                <div className="card-item-title">HIS系統</div>
                <div className="card-item-content">耀聖</div>
              </div>
              <div className="card-item">
                <div className="card-item-title">有無視訊</div>
                <div className="card-item-content text-success">有</div>
              </div>
              <div className="card-item">
                <div className="card-item-title">診所狀態</div>
                <div className="card-item-content text-danger">可回訪</div>
              </div>
              <div className="card-item">
                <div className="card-item-title">醫師人數</div>
                <div className="card-item-content">3</div>
              </div>
              <div className="card-item">
                <div className="card-item-title">叫號方式</div>
                <div className="card-item-content">線上叫號</div>
              </div>
            </section>
            <section className="mt-1 table">
              <div className="table-item">
                <div className="table-item-title">可否預約拜訪時間:</div>
                <div className="table-item-content">
                  <span className="text-success p-0">有</span>{" "}
                  <div className="p-0 px-2">15:00~18:00</div>
                </div>
              </div>
              <div className="table-item">
                <div className="table-item-title">醫師能否作主:</div>
                <div className="table-item-content text-danger">不能</div>
              </div>
              <div className="table-item">
                <div className="table-item-title">醫療群:</div>
                <div className="table-item-content text-danger">無</div>
              </div>
              <div className="table-item">
                <div className="table-item-title">其他醫院執業:</div>
                <div className="table-item-content text-danger">XX診所</div>
              </div>
              <div className="table-item">
                <div className="table-item-title">有無加入照護網:</div>
                <div className="table-item-content ">
                  <div className="text-success p-0">有</div>
                  <div className="d-flex flex-wrap py-0">
                    <div className="sick_btn">慢性病</div>
                    <div className="sick_btn">慢性腎臟病</div>
                    <div className="sick_btn">BC肝</div>
                    <div className="sick_btn">慢性阻塞性肺病</div>
                  </div>
                </div>
              </div>
            </section>
            <section className="w-100 text-center  mt-4 mb-1">
              <Button
                variant="success"
                className="text-white edit_button"
                onClick={handleInformModaShow}
              >
                編輯
              </Button>
            </section>
          </div>
        </div>
        <div className="py-2 w-100">
          <div className="h5 text-dark fw-bolder log_title">
            <div>Log:</div>
            <InputGroup size="sm" className="">
              查詢:
              <Form.Control
                onChange={(e) => logSearchHandler(e.target.value)}
                value={logSearch}
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
              />
              {logSearch && (
                <FontAwesomeIcon
                onClick={()=>logSearchHandler("")}
                  className="text-danger cursor-pointer fs-5"
                  icon="fa-solid fa-circle-xmark"
                />
              )}
            </InputGroup>
          </div>
          {arrayLog.map((item) => (
            <ClinicDetailLog key={item.id}></ClinicDetailLog>
          ))}
          <div className="d-flex justify-content-center mt-4">
          <PaginationUI></PaginationUI>
          </div>

        </div>
      </div>
      <Modal
        show={informModalShow}
        onHide={handleInformModaClose}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        size="lg"
      >
        <Modal.Header className="bg-secondary text-white" closeButton>
          <Modal.Title>編輯基本資料</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Modal_ClinicInformation></Modal_ClinicInformation>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            className="text-white w-25"
            onClick={handleInformModaClose}
          >
            送出
          </Button>
          <Button variant="secondary" onClick={handleInformModaClose}>
            取消
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="log_button">
        <Button variant="primary" size="lg" onClick={handleLOGModalShow}>
          <FontAwesomeIcon icon="fa-solid fa-plus" /> 新增Log
        </Button>{" "}
      </div>
      <Modal
        className="radio-custom"
        show={logModalShow}
        onHide={handleLOGModalClose}
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
            onClick={handleLOGModalClose}
          >
            送出
          </Button>
          <Button variant="secondary" onClick={handleLOGModalClose}>
            取消
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );

  // list listItem
};
export default ClinicDetail;
