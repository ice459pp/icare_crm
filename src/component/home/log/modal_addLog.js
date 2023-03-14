import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory, Link } from "react-router-dom";
import { Button, Modal, Form, InputGroup } from "react-bootstrap";
const modalAddLog = (props) => {
  const style = {
    height: `300px`,
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
                name="radio"
                id="radio1"
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
                name="radio"
                id="radio2"
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
                name="radio"
                id="radio3"
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
                name="radio"
                id="radio4"
              />
              <label
                className="form-check-label custom-control-label"
                htmlFor="radio4"
              >
                教育訓練
              </label>
            </div>
          </div>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">拜訪時間:</InputGroup.Text>
            <Form.Control
              placeholder="20:00~07:00"
              aria-label="拜訪時間"
              aria-describedby="basic-addon1"
              type="datetime-local"
            />
          </InputGroup>
          <textarea
            style={style}
            className="form-control inputTextarea"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
          ></textarea>
          <div className="input-group  px-2 ps-3 py-2  radio-custom inputRadio mt-2 mb-0 inputRadio-ClinicStatus">
            <div className="pe-3">診所狀態:</div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input custom-control-input"
                type="radio"
                name="radio"
                id="radio1"
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
                name="radio"
                id="radio2"
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
                name="radio"
                id="radio3"
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
export default modalAddLog;
