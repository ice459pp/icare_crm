import { React, useState, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
const InputCheckText = (props) => {
  const { text, index } = props;
  const [selectedCareNetworks, setSelectedCareNetworks] = useState([]);
  // console.log(selectedCareNetworks, "selectedCareNetworks", props, "ppapa");
  const handleClick = (careNetwork) => {
    if (selectedCareNetworks.includes(careNetwork)) {
      setSelectedCareNetworks(
        selectedCareNetworks.filter((selected) => selected !== careNetwork)
      );
      props.onRemove(text);
    } else {
      setSelectedCareNetworks([...selectedCareNetworks, careNetwork]);
      props.onChange(text);
      // props.careNetworkHandler(text);
    }
  };
  // const xmarkClickHandler = () => {
  //   props.onRemove(text);
  // };
  return (
    <Fragment>
      <Button
        className="mx-2 mt-2"
        size="sm"
        variant={
          selectedCareNetworks.includes(text) ? "primary" : "outline-primary"
        }
        onClick={() => handleClick(text)}
      >
        {text}
      </Button>{" "}
    </Fragment>
  );
  // return (
  //   <div className="d-flex">
  //     <div className="input-group-sm ">
  //       <input
  //         type="text"
  //         className="form-control"
  //         placeholder="輸入照護網文字"
  //         defaultValue={text}
  //         // onChange={(e) => {props.onChange(e.target.value)}}
  //         onBlur={(e) => {props.onChange({previous: text, now: e.target.value})}}
  //       />
  //     </div>
  //     <label className="form-check-label">
  //       <FontAwesomeIcon
  //         className="fs-6 text-danger  ps-2 removeOptionIcon"
  //         icon="fa-solid fa-circle-xmark"
  //         onClick={xmarkClickHandler}
  //       />
  //     </label>
  //   </div>
  // );
};

export default InputCheckText;
