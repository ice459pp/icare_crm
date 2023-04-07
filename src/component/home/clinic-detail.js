import React, { Fragment, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory, useParams } from "react-router-dom";
import ClinicDetailLog from "./clinic-detail-log";
import ClinicEditModal from "./inform/modal-clinic-edit";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import HomeIcon from "../icon/Home_icon";
import PhoneIcon from "../icon/Phone_icon";
import InputGroup from "react-bootstrap/InputGroup";
import Pagination from "./Pagination";
import { apiClinicInfo } from "../../api/api-clinic-info";
import { useSelector } from "react-redux";
import ModalAddLog from "./log/modal-add-log";
import { apiLogList } from "../../api/api-clinic-log";
import { useRef } from "react";
import { animateScroll as scroll } from "react-scroll";

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
  const divRef = useRef(null);
  const [scrollAdjust, setScrollAdjust] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const closeEditModalHandler = () => setEditModalShow(false);
  const showEditModalHandler = () => setEditModalShow(true);

  const [showAddLogModal, setShowAddLogModal] = useState(false);

  const [fetchClinicInfo, setFetchClinicInfo] = useState(false);
  const [clinicInfo, setClinicInfo] = useState(clinicData);
  const [logAction, setLogAction] = useState("add");
  const [log, setLog] = useState(null);
  const pageChangeHandler = (value) => {
    setPage(value);
  };

  const logSearchHandler = (value) => {
    setLogSearch(value.trim());
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



  const createLogClickHandler = (item, action) => {
    setLogAction(action);
    setLog(item);
    setShowAddLogModal(true);
  };

  const closeAddLogModalHandler = () => {
    setLog(null);
    setShowAddLogModal(false);
  };

  const editLogClickHandler = (item, action) => {
    setLogAction(action);
    setLog(item);
    setShowAddLogModal(true);
  };
  // this will be trigger when scrollAdjust and list change
  useEffect(() => {
    if (scrollAdjust && logList) {
      divRef.current.scrollIntoView({ behavior: "smooth", block: "start" });

      // const topPos = divRef.current.offsetTop;
      // const listContainer = document.querySelector("#listContainer");
      // if (listContainer) {
      //   listContainer.scrollTo({
      //     top: topPos,
      //     left: 0,
      //     behavior: "smooth",
      //   });
      // }


      setScrollAdjust(false);
    }
  }, [logList, scrollAdjust]);
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
          setScrollAdjust(true);
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
                      {clinicInfo.care_network
                        .split("$")
                        .filter((item) => item !== "")
                        .map((item) => (
                          <div
                            key={Math.random().toString(36).substr(2, 9)}
                            className="sick_btn"
                          >
                            {item}
                          </div>
                        ))}
                    </Fragment>
                  )}
                </div>
              </div>
            </section>
            <section  className="w-100 text-center  mt-4 mb-1">
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
          <div className="log_button">
            <Button
              variant="warning"
              className="text-light addNewRecord"
              size="lg"
              onClick={() => createLogClickHandler(null, "add")}
            >
              建立紀錄
            </Button>{" "}
          </div>
          <div className="h5 text-dark fw-bolder log_title">
            <div className=" log_title_name" ref={divRef}>
              Log:
            </div>
            <InputGroup size="sm" className="">
              查詢結果({totalCount}筆):
              <input
                type="text"
                // ref={logSearchRef}
                className="form-control"
                placeholder="內容紀錄查詢"
                // defaultValue={""}
                value={logSearch}
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
              readonly={false}
              onLogClick={() => editLogClickHandler(item, "edit")}
            ></ClinicDetailLog>
          ))}
          {totalCount > 0 && (
            <div className="d-flex justify-content-center ">
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
      {/* 新增log */}
      {logAction === "add" && showAddLogModal && (
        <ModalAddLog
          clinic_id={id}
          action={logAction}
          log={log}
          showMoadl={showAddLogModal}
          onClose={closeAddLogModalHandler}
          onRefresh={refreshHandler}
        />
      )}

      {logAction === "edit" && showAddLogModal && (
        <ModalAddLog
          clinic_id={id}
          action={logAction}
          log={log}
          showMoadl={showAddLogModal}
          onClose={closeAddLogModalHandler}
          onRefresh={refreshHandler}
        />
      )}
    </Fragment>
  );
};
export default ClinicDetail;
