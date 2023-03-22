import React, { Fragment, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory, Link } from "react-router-dom";
import { Button, Modal, Form, InputGroup } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import InputRadio from "./input-radio";
import ErrorText from "../error-text";
import { apiLogCreate } from "../../../api/api-clinic-log";
import appSlice from "../../../store/app-slice";
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
];
const ModalAddLog = (props) => {
  let { action, clinic_id } = props;
  const appSlice = useSelector((state) => state.appSlice);

  // console.log(item, "in ModalAddLog", action, "action");
  const style = {
    height: `300px`,
  };

  let log_writingSlice = useSelector((state) => state.log_writingSlice);
  let clinicStatus = log_writingSlice.clinic_status;
  let visitCategory = log_writingSlice.visit_category;
  let dispatch = useDispatch();

  const [errorText, setErrorText] = useState("");
  const [apiStart, setApiStart] = useState(false);

  // 初訪 回訪 電訪 教育訓練
  const [category, setCategory] = useState("初訪");

  // 可回訪 可電訪 結案
  const [status, setStatus] = useState("可回訪");

  const [description, setDiscription] = useState("");

  const [visitDate, setVisitDate] = useState(
    new Date().toISOString().slice(0, -8)
  );

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
    props.onClose()
  };

  useEffect(() => {
    if (apiStart) {
      const token = appSlice.userToken;
      
      console.log(clinic_id)
      apiLogCreate(
        token,
        clinic_id,
        category,
        status,
        formatDate(visitDate),
        description,
        "add",
        (err) => {
          setErrorText(err);
        },
        () => {
          props.onRefresh()
        }
      )
    }
  }, [apiStart]);

  return (
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
          {action === "create" && (
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">拜訪時間:</InputGroup.Text>
              <Form.Control
                placeholder="20:00~07:00"
                aria-label="拜訪時間"
                aria-describedby="basic-addon1"
                type="datetime-local"
                onChange={(e) => dateChangeHandler(e)}
                value={visitDate}
                // min={new Date().toISOString().slice(0, -8)}
              />
            </InputGroup>
          )}
          {action === "edit" && (
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">拜訪時間:</InputGroup.Text>
              <Form.Control
                placeholder="20:00~07:00"
                aria-label="拜訪時間"
                aria-describedby="basic-addon1"
                type="datetime-local"
              />
            </InputGroup>
          )}

          <textarea
            style={style}
            className="form-control inputTextarea"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
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
      <div>
        <Button
          variant="success"
          className="text-white w-25"
          onClick={createLogHandler}
        >
          送出
        </Button>
        <Button variant="secondary" onClick={closeModalHandler}>
          取消
        </Button>
      </div>
    </Fragment>
  );
};
export default ModalAddLog;
