import React, { Fragment, useState, useRef, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { apiRemoteAction } from "../../../api/remote/api-remote-action";
const ClinicCorrectInformModal = (props) => {
  const appSlice = useSelector((state) => state.appSlice);
  let { typeList, remoteList, clinicId } = props;
  console.log(typeList, remoteList, clinicId)
  const [editItem, setEditItem] = useState(null);

  const [apiUpdate, setApiUpdate] = useState(false);

  const closeRemoteModalHandler = () => {
    setEditItem(null);
  };

  const remoteStatusHandler = (action, remote) => {
    setEditItem({
      remote: remote,
      action: action,
    });
  };

  const confirmHandler = () => {

    if (!editItem.remote.device || !editItem.remote.number) {

      alert("請確認必填欄位")
      setApiUpdate(false);
      return;
    }
    setApiUpdate(true);
  };

  useEffect(() => {
    if (!apiUpdate) {
      return;
    }

    const token = appSlice.userToken;
    apiRemoteAction(
      token,
      editItem.remote.id,
      clinicId,
      editItem.action,
      editItem.remote.device ? editItem.remote.device : "",
      editItem.remote.type ? editItem.remote.type : "AnyDesk",
      editItem.remote.number ? editItem.remote.number : "",
      editItem.remote.pwd ? editItem.remote.pwd : "",
      editItem.remote.ip ? editItem.remote.ip : "",
      (err) => {
        alert(err);
      },
      () => {
        setApiUpdate(false);
        closeRemoteModalHandler();
        props.onRefresh();
      }
    );
  }, [apiUpdate]);

  return (
    <Fragment>
      <div className="computer-list">
        {!remoteList.length ? (
          <div className="fw-bolder text-dark mb-2 fs-5">暫無內容</div>
        ) : (
          remoteList.map((item) => (

            <div key={item.id} data-id={item.id} className="computer-item">
              <section>
                <div className="item item-computerName">
                  <div className="item-title">診所電腦:</div>
                  <div className="item-content">{item.device || ""}</div>
                </div>
                <div className="item item-computerName">
                  <div className="item-title">連線類別:</div>
                  <div className="item-content">{item.type || ""}</div>
                </div>
                <div className="item item-computerName">
                  <div className="item-title">連線ID:</div>
                  <div className="item-content">{item.number || ""}
                    {item.number && (
                      <button
                        className="btn btn-secondary"
                        size="sm"
                        style={{ marginLeft: '8px' }}
                        onClick={() => navigator.clipboard.writeText(item.number)}
                      >
                        複製
                      </button>
                    )}
                  </div>
                </div>
                <div className="item item-computerName">
                  <div className="item-title">密碼:</div>
                  <div className="item-content">{item.pwd || ""}</div>
                </div>
                <div className="item item-computerName">
                  <div className="item-title">IP:</div>
                  <div className="item-content">{item.ip || ""}</div>
                </div>
              </section>
              <section className="item-btn">
                <button
                  className="btn btn-primary"
                  onClick={() => remoteStatusHandler("edit", item)}
                >
                  <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
                </button>

                <button
                  className="btn text-light btn-danger"
                  onClick={() => remoteStatusHandler("del", item)}
                >
                  {" "}
                  <FontAwesomeIcon icon="fa-solid fa-trash-can" />
                </button>
              </section>
            </div>
          ))
        )}
      </div>
      <div className="modal-footer">
        <Button
          variant="primary"
          className="text-white addRecord btn btn-success"
          onClick={() => remoteStatusHandler("add", {})}
        >
          新增電腦
        </Button>
      </div>

      {editItem && (
        <Modal
          id="remoteComputer-modal"
          show={editItem != null}
          onHide={closeRemoteModalHandler}
          backdrop="static"
          keyboard={false}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          size="lg"
        >
          <Modal.Header className={editItem.action === "del" ? "bg-danger text-white" : " bg-primary text-white"} closeButton>
            <Modal.Title>
              {editItem.action === "del" ? "刪除確認" : "編輯電腦資訊"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {editItem.action !== "del" && (
              <Fragment>
                <div className="basicInform" data-id={editItem.remote.id}>
                  <section className="title">
                    <div className="inform-his-item ">
                      <label htmlFor="clinicName" className="form-label">
                        診所電腦:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="clinicName"
                        placeholder="輸入名稱...(必填)"
                        defaultValue={editItem.remote.device}
                        onChange={(e) => {
                          setEditItem({
                            ...editItem,
                            remote: {
                              ...editItem.remote,
                              device: e.target.value.trim(),
                            },
                          });
                        }}
                      />
                    </div>
                    <div className="inform-his-item ">
                      <label htmlFor="clinicTelephone" className="form-label">
                        連線ID:
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="clinicTelephone"
                        placeholder="輸入ID...(必填)"
                        defaultValue={editItem.remote.number}
                        onChange={(e) => {
                          setEditItem({
                            ...editItem,
                            remote: {
                              ...editItem.remote,
                              number: e.target.value.trim(),
                            },
                          });
                        }}
                      />
                    </div>
                    <div className="inform-his-item ">
                      <label htmlFor="clinicName" className="form-label">
                        密碼:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="clinicName"
                        placeholder="輸入密碼..."
                        defaultValue={editItem.remote.pwd}
                        onChange={(e) => {
                          setEditItem({
                            ...editItem,
                            remote: {
                              ...editItem.remote,
                              pwd: e.target.value.trim(),
                            },
                          });
                        }}
                      />
                    </div>
                  </section>
                  <section className="inform-his">
                    <div className="inform-his-item">
                      <label htmlFor="HIS-system" className="form-label">
                        連線類別:
                      </label>
                      <select
                        id="HIS-system"
                        className="form-select"
                        aria-label="Default select example"
                        onChange={(e) => {
                          setEditItem({
                            ...editItem,
                            remote: {
                              ...editItem.remote,
                              type: e.target.value || "AnyDesk",
                            },
                          });
                        }}
                      >
                        {typeList.map((item) => (
                          <option key={item.id} value={item.type}>
                            {item.type}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="inform-his-item ">
                      <label htmlFor="clinicName" className="form-label">
                        連線IP:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="clinicName"
                        placeholder="輸入IP...(必填)"
                        defaultValue={editItem.remote.ip}
                        onChange={(e) => {
                          setEditItem({
                            ...editItem,
                            remote: {
                              ...editItem.remote,
                              ip: e.target.value.trim(),
                            },
                          });
                        }}
                      />
                    </div>
                    <div className="inform-his-item">
                    </div>
                  </section>
                  <div className="footer-button mt-2 w-100">
                    <Button
                      variant="success"
                      className="text-white confirm"
                      onClick={confirmHandler}
                    >
                      送出
                    </Button>
                    <Button
                      variant="secondary"
                      className="cancel"
                      onClick={closeRemoteModalHandler}
                    >
                      取消
                    </Button>
                  </div>
                </div>
              </Fragment>
            )}
            {editItem.action === "del" && (
              <Fragment>
                <div className="text-dark fw-bolder py-2">
                  刪除後即不可復原,確定要刪除?
                </div>
                <div className="footer-button mt-2 w-100">
                  <Button
                    variant="outline-danger"
                    className="confirm"
                    onClick={confirmHandler}
                  >
                    確定刪除
                  </Button>
                  <Button
                    variant="secondary"
                    className="cancel"
                    onClick={closeRemoteModalHandler}
                  >
                    取消
                  </Button>
                </div>
              </Fragment>
            )}
          </Modal.Body>
        </Modal>
      )}
    </Fragment>
  );
};
export default ClinicCorrectInformModal;
