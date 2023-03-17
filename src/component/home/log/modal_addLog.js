import React, { Fragment, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory, Link } from "react-router-dom";
import { Button, Modal, Form, InputGroup } from "react-bootstrap";
import {
  onContentChange,
  onClinicStatusChange,
  onVisitCategoryChange,
  onVisitDateTimeChange,
} from "../../../store/log_writingSlice";
import { useDispatch, useSelector } from "react-redux";
const dateTransform = (timestamp) => {
  const date = new Date(timestamp);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${year}/${month}/${day} ${hours}:${minutes}`;
};
const ModalAddLog = (props) => {
  let { item, action, clinic_id } = props;
  // console.log(item, "in ModalAddLog", action, "action");
  const style = {
    height: `300px`,
  };
  
  let log_writingSlice = useSelector((state) => state.log_writingSlice);
  let clinicStatus = log_writingSlice.clinic_status;
  let visitCategory = log_writingSlice.visit_category;
  let dispatch = useDispatch();

  const handleStatusChange = (event) => {
    const value = event.target.value;
    dispatch(onClinicStatusChange(value));
  };
  const handleCategoryChange = (event) => {
    const value = event.target.value;
    dispatch(onVisitCategoryChange(value));
  };
  const contentChange = (e) => {
    const value = e.target.value;
    dispatch(onContentChange(value));
  };
  const dateChange = (e) => {
    const value = e.target.value;
    // console.log(new Date(e.target.value),"new Date(e.target.value)new Date(e.target.value)")
    let visitDate = dateTransform(value);
    dispatch(onVisitDateTimeChange(visitDate));
  };
  return (
    <Fragment>
      <div className="py-2">
        <div className="form-floating">
          <div className="input-group  px-2 ps-3 py-2 radio-custom inputRadio">
            <div className="pe-3">拜訪類別:</div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input custom-control-input"
                type="radio"
                name="visit_category"
                id="radio1"
                value="初訪"
                checked={visitCategory === "初訪"}
                onChange={handleCategoryChange}
              />
              <label
                className="form-check-label custom-control-label"
                // for="radio1"
                htmlFor="radio1"
              >
                初訪
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input custom-control-input"
                type="radio"
                name="visit_category"
                id="radio2"
                value="回訪"
                checked={visitCategory === "回訪"}
                onChange={handleCategoryChange}
              />
              <label
                className="form-check-label custom-control-label"
                htmlFor="radio2"
              >
                回訪
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input custom-control-input"
                type="radio"
                name="visit_category"
                id="radio3"
                value="電訪"
                checked={visitCategory === "電訪"}
                onChange={handleCategoryChange}
              />
              <label
                className="form-check-label custom-control-label"
                htmlFor="radio3"
              >
                電訪
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input custom-control-input"
                type="radio"
                name="visit_category"
                id="radio4"
                value="教育訓練"
                checked={visitCategory === "教育訓練"}
                onChange={handleCategoryChange}
              />
              <label
                className="form-check-label custom-control-label"
                htmlFor="radio4"
              >
                教育訓練
              </label>
            </div>
          </div>
          {action === "new" && (
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">拜訪時間:</InputGroup.Text>
              <Form.Control
                placeholder="20:00~07:00"
                aria-label="拜訪時間"
                aria-describedby="basic-addon1"
                type="datetime-local"
                onChange={(e) => dateChange(e)}
                // value={new Date().toISOString().slice(0, -8)}
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
            onChange={(e) => contentChange(e)}
          ></textarea>
          <div className="input-group  px-2 ps-3 py-2  radio-custom inputRadio mt-2 mb-0 inputRadio-ClinicStatus">
            <div className="pe-3">診所狀態:</div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input custom-control-input"
                type="radio"
                name="clinic_status"
                id="radio1"
                value="可回訪"
                checked={clinicStatus === "可回訪"}
                onChange={handleStatusChange}
              />
              <label
                className="form-check-label custom-control-label"
                // for="radio1"
                htmlFor="radio1"
              >
                可回訪
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input custom-control-input"
                type="radio"
                name="clinic_status"
                id="radio2"
                value="可電訪"
                checked={clinicStatus === "可電訪"}
                onChange={handleStatusChange}
              />
              <label
                className="form-check-label custom-control-label"
                htmlFor="radio2"
              >
                可電訪
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input custom-control-input"
                type="radio"
                name="clinic_status"
                id="radio3"
                value="結案"
                checked={clinicStatus === "結案"}
                onChange={handleStatusChange}
              />
              <label
                className="form-check-label custom-control-label"
                htmlFor="radio3"
              >
                結案
              </label>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ModalAddLog;
