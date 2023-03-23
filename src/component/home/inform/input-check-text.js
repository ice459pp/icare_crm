import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InputCheckText = (props) => {
  const { text, index } = props;

  const xmarkClickHandler = () => {
    props.onRemove(text)
  }

  return (
    <div className="d-flex">
      <div className="input-group-sm ">
        <input
          type="text"
          className="form-control"
          placeholder="輸入照護網文字"
          defaultValue={text}
          // onChange={(e) => {props.onChange(e.target.value)}}
          onBlur={(e) => {props.onChange({previous: text, now: e.target.value})}}
        />
      </div>
      <label className="form-check-label">
        <FontAwesomeIcon
          className="fs-6 text-danger  ps-2 removeOptionIcon"
          icon="fa-solid fa-circle-xmark"
          onClick={xmarkClickHandler}
        />
      </label>
    </div>
  );
};

export default InputCheckText;
