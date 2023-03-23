import React, { Fragment, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Search from "../component/home/search";
import { useHistory, useParams } from "react-router-dom";

import ClinicDetailLog from "./clinic-detail-log";
import ClinicEditModal from "./inform/modal-clinic-edit";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import HomeIcon from "../icon/Home_icon";
import PhoneIcon from "../icon/Phone_icon";
import Modal_AddLog from "./log/modal-add-log";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import PaginationUI from "./pagination";
import { apiClinicInfo } from "../../api/api-clinic-info";
import { useSelector } from "react-redux";
let logListArr = [];
let clinicData = {
  id: "", // clinic id
  name: "", // clinic name
  phone: "", // 0912345678
  city: "", // 台北市
  district: "", // district
  road: "", // address
  his: "", // 耀聖
  isUse_video: false, // streaming
  isDecided: false, //醫師能否做主
  people: 0, //醫師人數
  call_number_way: "", // 叫號方式
  isVisit_datetime: "", // 可否預約拜訪時間
  care_group: "", // 醫療群
  experience: "", // 其他醫院執業
  care_network: "", // 照護網
  clinic_status: "", // 可電訪 clinic status
};

const ClinicDetail = () => {
  const appSlice = useSelector((state) => state.appSlice);
  const navigate = useHistory();
  const params = useParams();
  const id = params.id;

  const [logSearch, setLogSearch] = useState("");
  const logSearchHandler = (value) => {
    let valueTrim = value.trim();

    setLogSearch(valueTrim);
  };

  const refreshHandler = () => {
    setEditModalShow(false)
    setFetchClinicInfo(true)
  }

  const sendNewLog = () => {
    setLogModalShow(!logModalShow);
  };

  const [editModalShow, setEditModalShow] = useState(false);
  const closeEditModalHandler = () => setEditModalShow(false);
  const showEditModalHandler = () => setEditModalShow(true);
  const [logModalShow, setLogModalShow] = useState(false);

  const [fetchClinicInfo, setFetchClinicInfo] = useState(false);
  const [clinicInfo, setClinicInfo] = useState(clinicData);

  useEffect(() => {
    if (appSlice.isLogin) {
      const token = appSlice.userToken;
      apiClinicInfo(
        token,
        id,
        (err) => {
          alert(err)
        },
        (data) => {
          setFetchClinicInfo(false)
          setClinicInfo(data);
        }
      );
    } else {
      navigate.push("/login");
    }
  }, [fetchClinicInfo]);

  return (
    <Fragment>
      <div className="w-100 padding-RWD">
        <div className="py-2 w-100">
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
                      <div className="text-success p-0">
                        {clinicInfo.care_network.split("$").length > 0
                          ? "有"
                          : "無"}
                      </div>
                      {clinicInfo.care_network.split("$").map((item) => (
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
                onClick={showEditModalHandler}
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
            {/* <PaginationUI></PaginationUI> */}
          </div>
        </div>
      </div>
      <Modal
        show={editModalShow}
        onHide={closeEditModalHandler}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        size="lg"
      >
        <Modal.Header className="bg-secondary text-white" closeButton>
          <Modal.Title>編輯診所資料</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ClinicEditModal
            item={clinicInfo}
            onClose={closeEditModalHandler}
            onRefresh={refreshHandler}
          ></ClinicEditModal>
        </Modal.Body>
      </Modal>
      <div className="log_button">
        <Button
          variant="primary"
          size="lg"
          onClick={(e) => {
            setLogModalShow(true);
          }}
        >
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
