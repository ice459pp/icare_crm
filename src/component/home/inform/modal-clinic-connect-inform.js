import React, { Fragment, useState, useRef, useEffect } from "react";
import { InputGroup, Form, Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
// import appSlice from "../../../store/app-slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { apiRemoteAction } from "../../../api/remote/api-remote-action";

import InputCheckText from "./input-check-text";
const ClinicCorrectInformModal = (props) => {
  console.log(props, "ClinicCorrectInformModal");
  const appSlice = useSelector((state) => state.appSlice);

  let { typeList, remoteList, clinicId } = props;
  const [remoteModal, setRemoteModal] = useState(false);
  const [remoteId, setRemoteId] = useState("");
  const [device, setDevice] = useState("");
  const [number, setNumber] = useState("");
  const [type, setType] = useState("AnyDesk");
  const [pwd, setPwd] = useState("");
  const [apiUpdate, setApiUpdate] = useState(false);
  const [action, setAction] = useState("add");
  // const [typeList, setTypeList] = useState([]);
  const closeRemoteModalHandler = () => {
    setRemoteModal(false);
  };
  const openRemoteModalHandler = () => {
    setRemoteModal(true);
  };
  useEffect(()=>{
    if (action === "remove") {
      console.log("刪除刪除山刪除");
      return;
      // setRemoteId(remote_id);
      // setAction("remove");
      // confirmHandler();
    }
    openRemoteModalHandler();
    renderData(action);
  },[remoteId,action])
  const remoteStatusHandler = (action, remote_id) => {
    setRemoteId(remote_id);
    setAction(action)
  };
  const reset = () => {
    setAction("add");
    setRemoteId("");
    setDevice("");
    setType("AnyDesk");
    setNumber("");
    setPwd("");
  };
  const renderData = (action) => {
    if (action === "add") {
      reset();
    } else if (action === "edit") {

      let item = remoteList.filter((item) => item.id === remoteId);
      console.log(remoteList, "remote", remoteId, "remoteId" ,item);
      setAction("edit");
      setRemoteId(item.id);
      setDevice(item.device);
      setType(item.type);
      setNumber(item.number);
      setPwd(item.pwd);
    }
  };
  const confirmHandler = () => {
    setApiUpdate(true);
  };
  useEffect(() => {
    if (!apiUpdate) {
      return;
    }
    const token = appSlice.userToken;
    apiRemoteAction(
      token,
      remoteId,
      clinicId,
      action,
      device,
      type,
      number,
      pwd,
      (err) => {
        alert(err);
      },
      () => {
        setApiUpdate();
        reset();
        closeRemoteModalHandler();
      }
    );
  }, [apiUpdate]);
  return (
    <Fragment>
      <div className="computer-list">
        {!remoteList.length
          ? "無慈悲的太陽"
          : remoteList.map((item) => (
              <div key={item.id} data-id={item.id} className="computer-item">
                <section>
                  <div className="item item-computerName">
                    <div className="item-title">診所電腦:</div>
                    <div className="item-content">{item.device}</div>
                  </div>
                  <div className="item item-computerName">
                    <div className="item-title">連線類別:</div>
                    <div className="item-content">{item.type}</div>
                  </div>
                  <div className="item item-computerName">
                    <div className="item-title">連線ID:</div>
                    <div className="item-content">{item.number}</div>
                  </div>
                  <div className="item item-computerName">
                    <div className="item-title">密碼:</div>
                    <div className="item-content">{item.pwd}</div>
                  </div>
                </section>
                <section className="item-btn">
                  <button
                    className="btn btn-primary"
                    onClick={() => remoteStatusHandler("edit", item.id)}
                  >
                    <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
                  </button>

                  <button
                    className="btn text-light btn-danger"
                    onClick={() => remoteStatusHandler("remove", item.id)}
                  >
                    {" "}
                    <FontAwesomeIcon icon="fa-solid fa-trash-can" />
                  </button>
                </section>
              </div>
            ))}
      </div>
      <div className="modal-footer">
        <Button
          variant="primary"
          className="text-white addRecord btn btn-warning"
          onClick={() => remoteStatusHandler("add", "")}
        >
          新增電腦
        </Button>
      </div>

      <Modal
        id="remoteComputer-modal"
        show={remoteModal}
        onHide={closeRemoteModalHandler}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        size="lg"
      >
        <Modal.Header className="bg-warning text-white" closeButton>
          <Modal.Title>編輯電腦資訊</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Fragment>
            <div className="basicInform" data-id={remoteId}>
              <section className="title">
                <div className="w-25 ">
                  <label htmlFor="clinicName" className="form-label">
                    診所電腦:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="clinicName"
                    placeholder=""
                    defaultValue={device}
                    onChange={(e) => {
                      setDevice(e.target.value);
                    }}
                  />
                </div>
                <div className="w-25 ">
                  <label htmlFor="clinicTelephone" className="form-label">
                    連線ID:
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="clinicTelephone"
                    placeholder="02-2362-5100"
                    defaultValue={number}
                    onChange={(e) => {
                      setNumber(e.target.value);
                    }}
                  />
                </div>
                <div className="w-25 ">
                  <label htmlFor="clinicName" className="form-label">
                    密碼:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="clinicName"
                    placeholder=""
                    defaultValue={pwd}
                    onChange={(e) => {
                      setPwd(e.target.value);
                    }}
                  />
                </div>
              </section>
              <section className="inform-his">
                <div className="inform-his-item">
                  <div className="w-100  ">
                    <label htmlFor="HIS-system" className="form-label">
                      連線類別:
                    </label>
                    <select
                      id="HIS-system"
                      className="form-select"
                      aria-label="Default select example"
                      defaultValue={type}
                      onChange={(e) => {
                        setType(e.target.value);
                      }}
                    >
                      {typeList.map((item) => (
                        <option key={item.id} value={item.type}>
                          {item.type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </section>
              <div className="footer-button mt-2 w-100">
                <Button
                  variant="warning"
                  className="text-white confirm"
                  onClick={confirmHandler}
                >
                  送出
                </Button>
                <Button
                  variant="dark"
                  className="cancel"
                  onClick={closeRemoteModalHandler}
                >
                  取消
                </Button>
              </div>
            </div>
          </Fragment>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};
export default ClinicCorrectInformModal;
