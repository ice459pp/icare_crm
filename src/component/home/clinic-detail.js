import React, { Fragment, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory, useParams } from "react-router-dom";
import ClinicDetailLog from "./clinic-detail-log";
import ClinicEditModal from "./inform/modal-clinic-edit";
import ClinicCorrectInformModal from "./inform/modal-clinic-connect-inform";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import HomeIcon from "../icon/Home_icon";
import PhoneIcon from "../icon/Phone_icon";
import InputGroup from "react-bootstrap/InputGroup";
import Pagination from "./Pagination";
import { apiClinicInfo } from "../../api/api-clinic-info";
import { apiRemoteTypeList } from "../../api/remote/api-remote-typeList";
import { apiRemoteInfoList } from "../../api/remote/api-remote-infoList";
import { useDispatch, useSelector } from "react-redux";
import ModalAddLog from "./log/modal-add-log";
import { apiLogList } from "../../api/api-clinic-log";
import { useRef } from "react";
import { modalAction } from "../../store/modal-slice";
import { Nav, Tab } from "react-bootstrap";

let clinicData = {
  id: "", // clinic id
  name: "", // clinic name
  phone: "", // 0912345678
  city: "", // 台北市
  district: "", // district
  road: "", // address
  his: "", // 耀聖
  star: '', //星星
  isUse_video: false, // streaming
  isDecided: false, //醫師能否做主
  people: 0, //醫師人數
  call_number_way: "", // 叫號方式
  isVisit_datetime: "", // 可否預約拜訪時間
  care_group: "", // 醫療群
  experience: "", // 其他醫院執業
  care_network: "", // 照護網
  clinic_status: "", // 可電訪 clinic status
  store:{
    merchantId:"", //商店ID
    hashKey:"", //Hash Key
    hashIV:"" //Hash IV
  }
};

const ClinicDetail = () => {
  const [key, setKey] = useState("log");
  const appSlice = useSelector((state) => state.appSlice);
  const navigate = useHistory();
  const params = useParams();
  const id = params.id;
  let dispatch = useDispatch();
  const modalSlice = useSelector((state) => state.modalSlice);
  const [modalIsShow, setModalIsShow] = useState(modalSlice.modalIsShow);
  const [logList, setlogList] = useState([]);
  const [refreshLog, setRefreshLog] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [logSearch, setLogSearch] = useState("");
  const divRef = useRef(null);
  const headerRef = useRef(null);
  const [editModalShow, setEditModalShow] = useState(false);
  const [connectInformModal, setConnectInformModal] = useState(false);
  const [showAddLogModal, setShowAddLogModal] = useState(false);

  const [fetchClinicInfo, setFetchClinicInfo] = useState(false);
  const [clinicInfo, setClinicInfo] = useState(clinicData);
  const [clinicCorrectInfo, setClinicCorrectInfo] = useState({});
  const [logAction, setLogAction] = useState("add");
  const [actionStatus, setActionStatus] = useState("");
  const [log, setLog] = useState(null);

  const [typeList, setTypeList] = useState([]);
  const [remoteList, setRemoteList] = useState([]);
  console.log(clinicInfo, "clinicInfo")

  useEffect(() => {
    setModalIsShow(modalSlice.modalIsShow);
  }, [modalSlice.modalIsShow]);
  const pageChangeHandler = (value) => {
    setActionStatus("goLog");
    setPage(value);
  };
  const closeEditModalHandler = () => {
    dispatch(modalAction.closeModal());
    setEditModalShow(false);
  };
  const showEditModalHandler = () => {
    dispatch(modalAction.showModal());
    setEditModalShow(true);
  };
  const showConnectInformModalHandler = () => {
    dispatch(modalAction.showModal());
    setConnectInformModal(true);
  };
  const closeConnectInformModalHandler = () => {
    dispatch(modalAction.closeModal());
    setConnectInformModal(false);
  };
  const logSearchHandler = (value) => {
    setActionStatus("goLog");
    setLogSearch(value.trim());
  };
  const clearSearchHandler = () => {
    setActionStatus("goLog");
    setLogSearch("");
  };

  const refreshHandler = () => {
    dispatch(modalAction.closeModal());
    setEditModalShow(false);
    setShowAddLogModal(false);
    setFetchClinicInfo(true);
    setRefreshLog(true);
  };

  const createLogClickHandler = (item, action) => {
    dispatch(modalAction.showModal());
    setLogAction(action);
    setLog(item);
    setShowAddLogModal(true);
  };

  const closeAddLogModalHandler = () => {
    dispatch(modalAction.closeModal());
    setLog(null);
    setShowAddLogModal(false);
  };
  const scrollTopHandler = (e) => {
    e.preventDefault();
    headerRef.current.scrollIntoView({ block: "start" });
  };

  const editLogClickHandler = (item, action) => {
    dispatch(modalAction.showModal());
    setLogAction(action);
    setLog(item);
    setShowAddLogModal(true);
  };
  const actionStatusHandler = (e) => {
    setActionStatus(e);
  };
  useEffect(() => {
    if (actionStatus === "add") {
      return;
    }
    if (actionStatus === "goLog") {
      if (logList.length > 3) {
        divRef.current.scrollIntoView({ block: "start" });
      }
      setActionStatus("");
    } else {
      headerRef.current.scrollIntoView({ block: "start" });
    }
  }, [logList]);
  useEffect(() => {
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
  }, [refreshLog]);
  useEffect(() => {
    if (appSlice.isLogin) {
      // fetch log api
      const token = appSlice.userToken;
      apiRemoteTypeList(
        token,
        (err) => {
          alert(err);
        },
        (data) => {
          setTypeList(data);
        }
      );
    }
  }, []);
  useEffect(() => {
    let timeoutId = "";
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
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
    }, 300);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [logSearch, page]);

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

  useEffect(() => {
    let clinicId = clinicInfo.id;
    if (!clinicId) {
      return;
    }
    if (appSlice.isLogin) {
      // fetch log api
      const token = appSlice.userToken;

      apiRemoteInfoList(
        token,
        clinicId,
        (err) => {
          alert(err);
        },
        (data) => {
          setRemoteList(data);
        }
      );
    }
  }, [clinicInfo]);
  return (
    <Fragment>
      <div className="w-100 padding-RWD" ref={headerRef}>
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
                  className={`card-item-content ${clinicInfo.his ? "text-dark" : "text-danger"
                    }`}
                >
                  {clinicInfo.his ? clinicInfo.his : "無"}
                </div>
              </div>
              <div className="card-item">
                <div className="card-item-title">有無視訊</div>
                <div
                  className={`card-item-content ${clinicInfo.isUse_video ? "text-success" : "text-danger"
                    }`}
                >
                  {clinicInfo.isUse_video ? "有" : "無"}
                </div>
              </div>
              <div className="card-item">
                <div className="card-item-title">診所狀態</div>
                <div
                  className={`card-item-content ${clinicInfo.clinic_status ? "text-dark" : "text-danger"
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
                  className={`card-item-content ${clinicInfo.call_number_way ? "text-dark" : "text-danger"
                    }`}
                >
                  {clinicInfo.call_number_way
                    ? clinicInfo.call_number_way
                    : "無"}
                </div>
              </div>

              <div className="card-item">
                <div className="card-item-title">星星</div>
                <div
                  className={`card-item-content ${clinicInfo.star===0 ? "text-dark" : "text-danger"
                    }`}
                >
                  {clinicInfo.star }
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
                  className={`table-item-content ${clinicInfo.isDecided ? "text-success" : "text-danger"
                    }`}
                >
                  {clinicInfo.isDecided ? "能" : "不能"}
                </div>
              </div>
              <div className="table-item">
                <div className="table-item-title">醫療群:</div>
                <div
                  className={`table-item-content ${clinicInfo.care_group ? "text-dark" : "text-danger"
                    }`}
                >
                  {clinicInfo.care_group ? `${clinicInfo.care_group}` : "無"}
                </div>
              </div>
              <div className="table-item">
                <div className="table-item-title">其他醫院執業:</div>
                <div
                  className={`table-item-content ${clinicInfo.experience ? "text-dark" : "text-danger"
                    }`}
                >
                  {clinicInfo.experience ? `${clinicInfo.experience}` : "無"}
                </div>
              </div>
              <div className="table-item">
                <div className="table-item-title">有無加入照護網:</div>
                <div
                  className={`table-item-content ${clinicInfo.care_network ? "text-dark" : "text-danger"
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
              <div className="table-item">
                <div className="table-item-title">診所連線資訊:</div>
                <Button
                  variant="primary"
                  className="btn-sm table-button"
                  onClick={showConnectInformModalHandler}
                >
                  open
                </Button>
              </div>
              </section>
              <section className="mt-5 table border border-warning border-2 rounded-1 p-3 pt-4 position-relative">
              <div className="table-item">
                <div className="table-item-title">商店ID:</div>
                {clinicInfo.store.merchantId ? (
                  <div className="table-item-content">
                    <div className="p-0 px-2">
                      {clinicInfo.store.merchantId}
                    </div>
                  </div>
                ) : (
                  <div className="table-item-content">
                    <span className="text-danger p-0">無</span>
                  </div>
                )}
              </div>
              <div className="table-item">
                <div className="table-item-title">Hash Key:</div>
                {clinicInfo.store.hashKey ? (
                  <div className="table-item-content">
                    <div className="p-0 px-2">
                      {clinicInfo.store.hashKey}
                    </div>
                  </div>
                ) : (
                  <div className="table-item-content">
                    <span className="text-danger p-0">無</span>
                  </div>
                )}
              </div>
              <div className="table-item">
                <div className="table-item-title">Hash IV:</div>
                {clinicInfo.store.hashIV ? (
                  <div className="table-item-content">
                    <div className="p-0 px-2">
                      {clinicInfo.store.hashIV}
                    </div>
                  </div>
                ) : (
                  <div className="table-item-content">
                    <span className="text-danger p-0">無</span>
                  </div>
                )}
                </div>
                <span class="position-absolute top-0 start-10 translate-middle-y border-warning border-2 p-2 bg-warning rounded-1">
                  <span class="text-white">藍新交易資訊</span>
                </span>
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

        {key === "log" && (
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
        )}
        {key === "service" && (
          <div className="log_button">
            <Button
              variant="primary"
              className="text-light addNewRecord"
              size="lg"
              onClick={() => createLogClickHandler(null, "add")}
            >
              建立問題
            </Button>{" "}
          </div>
        )}
        <Tab.Container activeKey={key} onSelect={(k) => setKey(k)}>
          <Nav ref={divRef} variant="tabs" defaultActiveKey="log">
            <Nav.Item>
              <Nav.Link eventKey="log">拜訪紀錄</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="service">客戶服務</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="log">
              <div id="log-container" className="py-2 w-100">
                <div className="h5 text-dark fw-bolder log_title">
                  <InputGroup size="sm" className="">
                    {logSearch !== "" && (
                      <FontAwesomeIcon
                        onClick={clearSearchHandler}
                        className="text-danger cursor-pointer fs-5 pe-1"
                        icon="fa-solid fa-circle-xmark"
                      />
                    )}
                    查詢結果({totalCount}筆):
                    <input
                      type="text"
                      className="form-control ms-2"
                      placeholder="內容紀錄查詢"
                      value={logSearch}
                      onChange={(e) => {
                        logSearchHandler(e.target.value);
                      }}
                    />
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
            </Tab.Pane>
            <Tab.Pane eventKey="service">
              <div id="service-container" className="py-2 w-100">
                <div className="h5 text-dark fw-bolder log_title">
                  <InputGroup size="sm" className="">
                    {logSearch !== "" && (
                      <FontAwesomeIcon
                        onClick={clearSearchHandler}
                        className="text-danger cursor-pointer fs-5 pe-1"
                        icon="fa-solid fa-circle-xmark"
                      />
                    )}
                    查詢結果({totalCount}+1筆):
                    <input
                      type="text"
                      className="form-control ms-2"
                      placeholder="問題紀錄查詢"
                      value={logSearch}
                      onChange={(e) => {
                        logSearchHandler(e.target.value);
                      }}
                    />
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
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
      {!modalIsShow && (
        <FontAwesomeIcon
          onClick={scrollTopHandler}
          className="text-secondary top-icon"
          icon="fa-solid fa-circle-arrow-up"
        />
      )}
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

      <Modal
        show={connectInformModal}
        onHide={closeConnectInformModalHandler}
        // backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        size="lg"
      >
        <Modal.Header className="bg-secondary text-white" closeButton>
          <Modal.Title>診所連線資訊</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ClinicCorrectInformModal
            typeList={typeList}
            remoteList={remoteList}
            onClose={closeConnectInformModalHandler}
            onRefresh={refreshHandler}
            clinicId={clinicInfo.id}
          ></ClinicCorrectInformModal>
        </Modal.Body>
      </Modal>

      {logAction === "add" && showAddLogModal && (
        <ModalAddLog
          onActionStatus={actionStatusHandler}
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
          onActionStatus={actionStatusHandler}
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
