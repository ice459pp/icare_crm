import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory, Link } from "react-router-dom";
import { Button, Modal, Form } from "react-bootstrap";
const modalAddLog = (props) => {
  const style = {
    height: `300px`,
  };
  return (
    <Fragment>
      <div className="py-2">
        <div className="form-floating">
          <div className="input-group  px-2 ps-3 py-2 radio-custom inputRadio">
            <div className="pe-3">狀態類別:</div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input custom-control-input"
                type="radio"
                name="radio"
                id="radio1"
              />
              <label
                className="form-check-label custom-control-label"
                for="radio1"
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
                for="radio2"
              >
                回訪
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
                for="radio2"
              >
                教育訓練
              </label>
            </div>
          </div>
          <textarea
            style={style}
            className="form-control inputTextarea"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
          ></textarea>
        </div>
      </div>
    </Fragment>
  );
};
export default modalAddLog;
