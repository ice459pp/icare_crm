import React, { Fragment, useEffect, useState } from "react";
import { Button, Modal, Form, InputGroup } from "react-bootstrap";

import { useSelector } from "react-redux";
import InputRadio from "./input-radio";
import ErrorText from "../error-text";
import { apiLogCreate } from "../../../api/api-clinic-log";
import { faL } from "@fortawesome/free-solid-svg-icons";

const formatDate = (timestamp) => {
  const date = new Date(timestamp);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${year}/${month}/${day} ${hours}:${minutes}`;
};

const categoryArr = [
  {
    id: 1,
    text: "初訪",
  },
  {
    id: 2,
    text: "回訪",
  },
  {
    id: 3,
    text: "電訪",
  },
  {
    id: 4,
    text: "教育訓練",
  },
];
const statusArr = [
  {
    id: 1,
    text: "可回訪",
  },
  {
    id: 2,
    text: "可電訪",
  },
  {
    id: 3,
    text: "結案",
  },
  {
    id: 4,
    text: "成交",
  },
  {
    id: 5,
    text: "棄用",
  },
];
const ModalAddLog = (props) => {
  let { action, clinic_id, log } = props;
  console.log(log,"lloggogogogog")
  const appSlice = useSelector((state) => state.appSlice);

  const currentDateTime = () => {
    var tzoffset = new Date().getTimezoneOffset() * 60000;
    return new Date(Date.now() - tzoffset).toISOString().slice(0, -8);
  };

  // console.log(item, "in ModalAddLog", action, "action");
  const style = {
    height: `300px`,
  };

  const [errorText, setErrorText] = useState("");
  const [apiStart, setApiStart] = useState(false);

  // 初訪 回訪 電訪 教育訓練
  const [category, setCategory] = useState(log ? log.visit_category : "初訪");

  // 可回訪 可電訪 結案
  const [status, setStatus] = useState(log ? log.clinic_status : "可回訪");

  const [description, setDiscription] = useState(log ? log.content : "");

  const [visitDate, setVisitDate] = useState(
    log
      ? log.visit_datetime.replaceAll("/", "-").replace(" ", "T")
      : currentDateTime()
  );

  // useEffect(() => {
  //   console.log(log);
  // }, []);

  const statusChangeHandler = (event) => {
    const value = event.target.value;
    setStatus(value);
  };

  const categoryChangeHandler = (event) => {
    const value = event.target.value;
    setCategory(value);
  };

  const discriptionChangeHandler = (e) => {
    const value = e.target.value;
    setDiscription(value);
  };

  const dateChangeHandler = (e) => {
    const value = e.target.value;
    setVisitDate(value);
  };

  const createLogHandler = () => {
    setApiStart(true);
  };

  const closeModalHandler = () => {
    props.onClose();
  };

  useEffect(() => {
    if (apiStart) {
      const token = appSlice.userToken;
      apiLogCreate(
        token,
        clinic_id,
        log ? log.id : "",
        category,
        status,
        formatDate(visitDate),
        description,
        log ? "edit" : "add",
        (err) => {
          setErrorText(err);
        },
        () => {
          setApiStart(false);
          props.onRefresh();
        }
      );
    }
  }, [apiStart]);

  return (
    <Modal
      className="radio-custom"
      show={props.showMoadl}
      onHide={props.onClose}
      centered
      backdrop="static"
      keyboard={false}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Header className="bg-secondary text-white" closeButton>
        <Modal.Title>{log ? "編輯拜訪紀錄" : "新增拜訪紀錄"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Fragment>
          <div className="py-2">
            <div className="form-floating">
              <div className="input-group  px-2 ps-3 py-2 radio-custom inputRadio">
                <div className="pe-3">拜訪類別:</div>

                {categoryArr.map((item) => {
                  return (
                    <InputRadio
                      key={item.id}
                      id={item.id}
                      text={item.text}
                      name="visit"
                      isCheck={item.text === category}
                      onChange={categoryChangeHandler}
                    />
                  );
                })}
              </div>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">拜訪時間:</InputGroup.Text>
                <Form.Control
                  placeholder="20:00~07:00"
                  aria-label="拜訪時間"
                  aria-describedby="basic-addon1"
                  type="datetime-local"
                  onChange={(e) => dateChangeHandler(e)}
                  value={visitDate}
                />
              </InputGroup>

              <textarea
                style={style}
                className="form-control inputTextarea"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                defaultValue={description}
                onChange={(e) => discriptionChangeHandler(e)}
              ></textarea>
              <div className="input-group  px-2 ps-3 py-2  radio-custom inputRadio mt-2 mb-0 inputRadio-ClinicStatus">
                <div className="pe-3">診所狀態:</div>

                {statusArr.map((item) => {
                  return (
                    <InputRadio
                      key={item.id}
                      id={item.id}
                      text={item.text}
                      name="status"
                      isCheck={item.text === status}
                      onChange={statusChangeHandler}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          {errorText && <ErrorText text={errorText} />}
        </Fragment>
      </Modal.Body>
      <Modal.Footer>
        <div className="footer-button">
          <Button
            variant="success"
            className="text-white confirm "
            onClick={createLogHandler}
          >
            送出
          </Button>
          <Button
            className="cancel "
            variant="secondary"
            onClick={closeModalHandler}
          >
            取消
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalAddLog;
