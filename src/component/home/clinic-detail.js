import React, { Fragment, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Search from "../component/home/search";
import { useParams } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
// import ClinicDetail from "../component/home/clinic-list"
import ClinicDetailLog from "./clinic-detail-log";
import Modal_ClinicInformation from "./inform/modal-clinic-info";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import HomeIcon from "../icon/Home_icon";
import PhoneIcon from "../icon/Phone_icon";
import Modal_AddLog from "./log/modal-add-log";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import PaginationUI from "./pagination";
let logListArr = [
  {
    id: "fgretlgwrlg",
    visitor_id: "dfasdfa6876sdf",
    visitor_name: "阿民",
    content: "經過與醫師討論後，決定先初次使用看看叫號功能，後續再與我們聯絡。",
    visit_category: "教育訓練",
    visit_datetime: "2023/03/06 9:30",
    now_datetime: "2023/03/06 9:30",
    isApproval: false,
    clinic_status: "可電訪",
  },
  {
    id: "fgretlgwrlsdassadg",
    visitor_id: "dfasdfa76666sdf",
    visitor_name: "龍哥",
    content: "經過與醫師討論後，決定先初次使用看看叫號功能，後續再與我們聯絡。",
    visit_category: "初訪",
    visit_datetime: "2023/03/06 9:30",
    now_datetime: "2023/03/06 9:30",
    isApproval: false,
    clinic_status: "結案",
  },
  {
    id: "fgret96885lgwwrlg",
    visitor_id: "dfasdfdefqqeasdf",
    visitor_name: "turtle",
    content: "經過與醫師討論後，決定先初次使用看看叫號功能，後續再與我們聯絡。",
    visit_category: "電訪",
    visit_datetime: "2023/03/06 9:30",
    now_datetime: "2023/03/06 9:30",
    isApproval: false,
    clinic_status: "可回訪",
  },
  {
    id: "fgretl7865785gwrlg",
    visitor_id: "dfasdfasdwdwwukiukoliof",
    visitor_name: "elephant",
    content: "經過與醫師討論後，決定先初次使用看看叫號功能，後續再與我們聯絡。",
    visit_category: "回訪",
    visit_datetime: "2023/03/06 9:30",
    now_datetime: "2023/03/06 9:30",
    isApproval: false,
    clinic_status: "可電訪",
  },
  {
    id: "fgretlg785785fgdfgfdgsdwrlg",
    visitor_id: "dfasdfasdf",
    visitor_name: "DOG",
    content:
      "經過與醫師討論後，決定先初werqwer次使用看看叫號功能，後續再與我們聯絡。",
    visit_category: "教育訓練",
    visit_datetime: "2023/03/06 9:30",
    now_datetime: "2023/03/06 9:30",
    isApproval: false,
    clinic_status: "可電訪",
  },
  {
    id: "fgre786786tlgwrlg",
    visitor_id: "dfasdfasdf",
    visitor_name: "sheep",
    content: "經過與醫師討論後，決定先初次使用看看叫號功能，後續再與我們聯絡。",
    visit_category: "初訪",
    visit_datetime: "2023/03/06 9:30",
    now_datetime: "2023/03/06 9:30",
    isApproval: false,
    clinic_status: "可回訪",
  },
];
let clinicInfo = {
  id: "c1",
  name: "cxxx診所",
  phone: "0921231434",
  city: "台北市",
  district: "大安區",
  road: "瑞光路4段18號5-5",
  his: "耀聖", // 1耀聖
  isUse_video: false,
  isDecided: false, //醫師能否做主
  people: 3, //醫師人數
  call_number_way: "線上叫號",
  isVisit_datetime: "15:00~18:00", // 可否預約拜訪時間
  care_group: "臺大醫院",
  experience: "臺大醫院耳鼻喉科副主任",
  care_network: "慢性病$BC肝$慢性腎臟病$ABCD其他資訊",
  clinic_status: "可電訪",
};
let care_networkArr = [];
const ClinicDetail = () => {
  const [informModalShow, setInformModalShow] = useState(false);
  const [logSearch, setLogSearch] = useState("");
  const logSearchHandler = (value) => {
    let valueTrim = value.trim();
    // TODO GET API LOGLIST
    setLogSearch(valueTrim);
    // fetchApi(valueTrim)
  };
  const handleInformModaClose = () => setInformModalShow(false);
  const handleInformModaShow = () => setInformModalShow(true);
  const [logModalShow, setLogModalShow] = useState(false);

  const sendNewLog = () => {
    // TOＤＯ　ＡＰＩ　ＰＯＳＴ　ｌｏｇ　ｎｅｗ
    setLogModalShow(!logModalShow);
  };
  const handleLOGModalShow = () => setLogModalShow(true);

  const startFetch = (xxx) => {
    // load data
    // const apiLostList = async (xxx) => {
    //   await
    // }
    // apiLostList(xxx)
  };

  useEffect(() => {
    // todo API GET LOG_LIST
    // todo API GET clinic_info
    startFetch("xxx");
    clinicInfo = JSON.parse(JSON.stringify(clinicInfo));
    care_networkArr = clinicInfo.care_network.split("$");
  }, []);
  return (
    <Fragment>
      <div className="w-100 padding-RWD">
        <div className="py-2 w-100">
          {/* <div className="h5 text-dark fw-bolder">基本資料:</div> */}
          <div className="w-100 bg-white  inform">
            <section className="clinicName">
              <div className="h3 fw-bolder  text-primary">
                {clinicInfo.name}
              </div>
              <div className="h3 fw-bolder code">{clinicInfo.id}</div>
            </section>
            <section className="d-flex align-items-center mt-1">
              <div className="h5   text-dark">
                <HomeIcon></HomeIcon>
              </div>
              <div className="h5  ps-3 code">
                {clinicInfo.city}
                {clinicInfo.district}
                {clinicInfo.road}
              </div>
            </section>
            <section className="d-flex align-items-center mt-1 mb-2 ">
              <div className="h5   text-dark">
                <PhoneIcon></PhoneIcon>
              </div>
              <div className="h5  ps-3 text-info">{clinicInfo.phone}</div>
            </section>
            <div className="line"></div>
            <section className=" card">
              <div className="card-item">
                <div className="card-item-title">HIS系統</div>
                <div className="card-item-content">{clinicInfo.his}</div>
              </div>
              <div className="card-item">
                <div className="card-item-title">有無視訊</div>
                <div className="card-item-content text-success">
                  {clinicInfo.isUse_video ? "有" : "無"}
                </div>
              </div>
              <div className="card-item">
                <div className="card-item-title">診所狀態</div>
                <div className="card-item-content text-danger">
                  {clinicInfo.clinic_status}
                </div>
              </div>
              <div className="card-item">
                <div className="card-item-title">醫師人數</div>
                <div className="card-item-content">{clinicInfo.people}</div>
              </div>
              <div className="card-item">
                <div className="card-item-title">叫號方式</div>
                <div className="card-item-content">
                  {clinicInfo.call_number_way}
                </div>
              </div>
            </section>
            <section className="mt-1 table">
              <div className="table-item">
                <div className="table-item-title">可否預約拜訪時間:</div>
                {clinicInfo.isVisit_datetime ? (
                  <div className="table-item-content">
                    <span className="text-success p-0">有</span>{" "}
                    <div className="p-0 px-2">
                      {clinicInfo.isVisit_datetime}
                    </div>
                  </div>
                ) : (
                  <div className="table-item-content">
                    <span className="text-success p-0">無</span>
                  </div>
                )}
              </div>
              <div className="table-item">
                <div className="table-item-title">醫師能否作主:</div>
                <div className="table-item-content text-danger">
                  {clinicInfo.isDecided ? "能" : "不能"}
                </div>
              </div>
              <div className="table-item">
                <div className="table-item-title">醫療群:</div>
                <div className="table-item-content text-danger">
                  {clinicInfo.care_group ? `${clinicInfo.care_group}` : "無"}
                </div>
              </div>
              <div className="table-item">
                <div className="table-item-title">其他醫院執業:</div>
                <div className="table-item-content text-danger">
                  {clinicInfo.experience ? `${clinicInfo.experience}` : "無"}
                </div>
              </div>
              <div className="table-item">
                <div className="table-item-title">有無加入照護網:</div>
                <div className="table-item-content ">
                  {!clinicInfo.care_network && `無`}
                  {clinicInfo.care_network && (
                    <Fragment>
                      <div className="text-success p-0">有</div>
                      {care_networkArr.map((item) => (
                        <div key={item} className="sick_btn">
                          {item}
                        </div>
                      ))}
                    </Fragment>
                  )}
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
                  onClick={() => logSearchHandler("")}
                  className="text-danger cursor-pointer fs-5"
                  icon="fa-solid fa-circle-xmark"
                />
              )}
            </InputGroup>
          </div>
          {logListArr.map((item) => (
            <ClinicDetailLog key={item.id} item={item}></ClinicDetailLog>
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
          <Modal_ClinicInformation
            care_networkArr={care_networkArr}
            item={clinicInfo}
          ></Modal_ClinicInformation>
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
        <Button variant="primary" size="lg" onClick={(e)=>{setLogModalShow(true)}}>
          <FontAwesomeIcon icon="fa-solid fa-plus" /> 新增Log
        </Button>{" "}
      </div>
      <Modal
        className="radio-custom"
        show={logModalShow}
        onHide={sendNewLog}
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
            onClick={sendNewLog}
          >
            送出
          </Button>
          <Button
            variant="secondary"
            onClick={() => setLogModalShow(!logModalShow)}
          >
            取消
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );

  // list listItem
};
export default ClinicDetail;
