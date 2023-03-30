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
import Pagination from "./Pagination";
import { apiClinicInfo } from "../../api/api-clinic-info";
import { useSelector } from "react-redux";
import ModalAddLog from "./log/modal-add-log";
import { apiLogList } from "../../api/api-clinic-log";
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
  // detail+logList
  const appSlice = useSelector((state) => state.appSlice);
  const navigate = useHistory();
  const params = useParams();
  const id = params.id;

  const [logList, setlogList] = useState([]);
  const [refreshLog, setRefreshLog] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [logSearch, setLogSearch] = useState("");

  const pageChangeHandler = (value) => {
    console.log(value);
    setPage(value);
  };

  const logSearchHandler = (value) => {
    const timer = setInterval(() => {
      clearInterval(timer);
      setLogSearch(value.trim());
    }, 1300);
  };

  const clearSearchHandler = () => {
    setLogSearch("");
  };

  const refreshHandler = () => {
    setEditModalShow(false);
    setShowAddLogModal(false);
    setFetchClinicInfo(true);
    setRefreshLog(true);
  };

  const [editModalShow, setEditModalShow] = useState(false);
  const closeEditModalHandler = () => setEditModalShow(false);
  const showEditModalHandler = () => setEditModalShow(true);

  const [showAddLogModal, setShowAddLogModal] = useState(false);

  const [fetchClinicInfo, setFetchClinicInfo] = useState(false);
  const [clinicInfo, setClinicInfo] = useState(clinicData);

  const createLogClickHandler = () => {
    setShowAddLogModal(true);
  };

  const closeAddLogModalHandler = () => {
    setLog(null);
    setShowAddLogModal(false);
  };

  // for detail log editing
  /**
   * 
   * logId={logId}
        category={logCategory}
        datetime={logDatetime}
        description={logDescription}
        status={logStatus}} logId 
   */

  const [log, setLog] = useState(null);

  const editLogClickHandler = (logItem) => {
    setLog(logItem);
    setShowAddLogModal(true);
  };

  // this will be trigger when show log modal
  useEffect(() => {
    // this is important.
    if (appSlice.isLogin) {
      // fetch log api
      const token = appSlice.userToken;
      apiLogList(
        token,
        page,
        id,
        logSearch,
        (err) => {
          alert(err);
        },
        (list, total, totalPage) => {
          setTotalCount(total);
          setTotalPage(totalPage);
          setlogList(list);
          setRefreshLog(false);
        }
      );
    }
  }, [refreshLog, page, logSearch]);

  useEffect(() => {
    if (appSlice.isLogin) {
      const token = appSlice.userToken;
      apiClinicInfo(
        token,
        id,
        (err) => {
          alert(err);
        },
        (data) => {
          setFetchClinicInfo(false);
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
                {/* <div className="card-item-content">{clinicInfo.his}</div> */}
                <div
                  className={`card-item-content ${
                    clinicInfo.his ? "text-dark" : "text-danger"
                  }`}
                >
                  {clinicInfo.his ? clinicInfo.his : "無"}
                </div>
              </div>
              <div className="card-item">
                <div className="card-item-title">有無視訊</div>
                <div
                  className={`card-item-content ${
                    clinicInfo.isUse_video ? "text-success" : "text-danger"
                  }`}
                >
                  {clinicInfo.isUse_video ? "有" : "無"}
                </div>
              </div>
              <div className="card-item">
                <div className="card-item-title">診所狀態</div>
                <div
                  className={`card-item-content ${
                    clinicInfo.clinic_status ? "text-dark" : "text-danger"
                  }`}
                >
                  {clinicInfo.clinic_status ? clinicInfo.clinic_status : "無"}
                </div>
              </div>
              <div className="card-item">
                <div className="card-item-title">醫師人數</div>
                <div className="card-item-content">{clinicInfo.people}</div>
              </div>
              <div className="card-item">
                <div className="card-item-title">叫號方式</div>
                <div
                  className={`card-item-content ${
                    clinicInfo.call_number_way ? "text-dark" : "text-danger"
                  }`}
                >
                  {clinicInfo.call_number_way
                    ? clinicInfo.call_number_way
                    : "無"}
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
                    <span className="text-danger p-0">無</span>
                  </div>
                )}
              </div>
              <div className="table-item">
                <div className="table-item-title">醫師能否作主:</div>
                <div
                  className={`table-item-content ${
                    clinicInfo.isDecided ? "text-success" : "text-danger"
                  }`}
                >
                  {clinicInfo.isDecided ? "能" : "不能"}
                </div>
              </div>
              <div className="table-item">
                <div className="table-item-title">醫療群:</div>
                <div
                  className={`table-item-content ${
                    clinicInfo.care_group ? "text-dark" : "text-danger"
                  }`}
                >
                  {clinicInfo.care_group ? `${clinicInfo.care_group}` : "無"}
                </div>
              </div>
              <div className="table-item">
                <div className="table-item-title">其他醫院執業:</div>
                <div
                  className={`table-item-content ${
                    clinicInfo.experience ? "text-dark" : "text-danger"
                  }`}
                >
                  {clinicInfo.experience ? `${clinicInfo.experience}` : "無"}
                </div>
              </div>
              <div className="table-item">
                <div className="table-item-title">有無加入照護網:</div>
                <div
                  className={`table-item-content ${
                    clinicInfo.care_network ? "text-dark" : "text-danger"
                  }`}
                >
                  {!clinicInfo.care_network && `無`}
                  {clinicInfo.care_network && (
                    <Fragment>
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
              查詢結果({totalCount}筆):
              {/* <Form.Control
                onBlur={(e) => logSearchHandler(e.target.value)}
                value={logSearch}
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
              /> */}
              <input
                type="text"
                className="form-control"
                placeholder="內容紀錄查詢"
                defaultValue=""
                onChange={(e) => {
                  logSearchHandler(e.target.value);
                }}
              />
              {logSearch !== "" && (
                <FontAwesomeIcon
                  onClick={clearSearchHandler}
                  className="text-danger cursor-pointer fs-5"
                  icon="fa-solid fa-circle-xmark"
                />
              )}
            </InputGroup>
          </div>
          {logList.map((item) => (
            <ClinicDetailLog
              key={item.id}
              item={item}
              readonly={true}
              onLogClick={editLogClickHandler}
            ></ClinicDetailLog>
          ))}
          {totalCount > 0 && (
            <div className="d-flex justify-content-center mt-4">
              <Pagination
                page={page}
                totalPage={totalPage}
                onPageChange={pageChangeHandler}
              ></Pagination>
            </div>
          )}
        </div>
      </div>
      {/* 編輯診所 */}
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
        <Button variant="primary" size="lg" onClick={createLogClickHandler}>
          建立紀錄
        </Button>{" "}
      </div>
      {/* 新增log */}
      {log === null && showAddLogModal && (
        <ModalAddLog
          clinic_id={id}
          action="add"
          log={null}
          showMoadl={showAddLogModal}
          onClose={closeAddLogModalHandler}
          onRefresh={refreshHandler}
        />
      )}

      {log && showAddLogModal && (
        <ModalAddLog
          clinic_id={id}
          action="edit"
          log={log}
          showMoadl={showAddLogModal}
          onClose={closeAddLogModalHandler}
          onRefresh={refreshHandler}
        />
      )}
    </Fragment>
  );

  // list listItem
};
export default ClinicDetail;
