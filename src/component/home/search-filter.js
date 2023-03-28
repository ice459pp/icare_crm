import React, { Fragment, useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  InputGroup,
  Dropdown,
  DropdownButton,
  Form,
  Button,
  Modal,
} from "react-bootstrap";
// import TWzipcode from "react-twzipcode";
import jsonData from "../../twzipcode.json";
import { filterAction } from "../../store/filter-slice";
import { useDispatch } from "react-redux";

const styles = {
  borderRadius: `10px 0 0 10px`,
};

const SearchFilter = (props) => {
  let dispatch = useDispatch();
  let clinicNameRef = useRef(null);
  const [clinicStatus, setClinicStatus] = useState(
    sessionStorage.getItem("clinic_status")
  );
  const [selectedCity, setSelectedCity] = useState(
    sessionStorage.getItem("city")
  );
  const [selectedDistrict, setSelectedDistrict] = useState(
    sessionStorage.getItem("district")
  );
  const [districts, setDistricts] = useState([]);
  const [isSelect, setIsSelect] = useState(false);
  useEffect(() => {
    if (sessionStorage.length) {
      setIsSelect(true);
    }
  }, [sessionStorage.length]);
  useEffect(() => {
    if (selectedCity) {
      setDistricts(Object.keys(jsonData[selectedCity]));
    } else {
      setDistricts([]);
    }
  }, [selectedCity]);
  const clinicStatusHandler = (e) => {
    let value = e.target.value;
    props.onStatusChange(value);
    // dispatch(filterAction.onClinicStatus(value));
    setIsSelect(true);
  };
  const searchTextHandler = () => {
    if (!clinicNameRef.current.value) {
      return;
    }
    let value = clinicNameRef.current.value || "";
    props.onSearchText(value);
    // dispatch(filterAction.onsearchText(value));
    setIsSelect(true);
  };
  const cityChangeHandler = (e) => {
    // 城市
    let value = e.target.value;
    setSelectedCity(value);
    setIsSelect(true);
    // dispatch(filterAction.onCity(value));
    props.onCityChange(value);
  };
  const districtChangeHandler = (e) => {
    // 區域
    let value = e.target.value;
    setSelectedDistrict(value);
    setIsSelect(true);
    // dispatch(filterAction.onDistrict(value));
    props.onDistrictChange(value);
  };
  const resetHandler = () => {
    props.onStatusChange("");
    setClinicStatus("");
    props.onMutationHandler("")
    clinicNameRef.current.value = "";
    props.onSearchText("");
    setSelectedCity("");
    props.onCityChange("");
    setSelectedDistrict("");
    props.onDistrictChange("");
    setIsSelect(false);
    dispatch(filterAction.resetState());
  };

  return (
    <Fragment>
      <form className="p-3 search">
        <div className="d-flex align-items-center mb-2 search-clinicStatus">
          <label className="">診所進度:</label>
          <Form.Select
            aria-label="Default select example"
            className="widthRWD-40 "
            onChange={clinicStatusHandler}
          >
            <option value="" selected={clinicStatus === ""}>
              全部
            </option>
            <option value="可回訪" selected={clinicStatus === "可回訪"}>
              可回訪
            </option>
            <option value="可電訪" selected={clinicStatus === "可電訪"}>
              可電訪
            </option>
            <option value="結案" selected={clinicStatus === "結案"}>
              結案
            </option>
          </Form.Select>
        </div>
        <div className="d-flex align-items-center mb-2 search-clinicStatus">
          <label className="">選擇科別:</label>
          <Button
            // onClick={showLogListModalHandler}
            className="btn-sm w-25 text-light"
            variant="primary"
          >
            科別
          </Button>
        </div>

        <div className="d-flex align-items-center pb-2 ">
          <div className="d-flex align-items-center widthRWD">
            <div>
              <select
                className="county-sel"
                value={selectedCity}
                onChange={(e) => cityChangeHandler(e)}
              >
                <option value="">全部縣市</option>
                {Object.keys(jsonData).map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
              <select
                className="district-sel"
                value={selectedDistrict}
                onChange={(e) => districtChangeHandler(e)}
                disabled={!districts.length}
              >
                <option value="">所有地區</option>
                {districts.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <InputGroup className="input-group-textSearch" size="">
          <Form.Control
            placeholder="搜尋地址、道路名稱、診所名稱"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            defaultValue={sessionStorage.getItem("searchText")}
            ref={clinicNameRef}
          />
          <button
            className="btn btn-secondary"
            type="button"
            id="button-addon2"
            onClick={searchTextHandler}
          >
            <FontAwesomeIcon icon="fas fa-search" />
          </button>
          {isSelect && (
            <button
              className="btn btn-danger text-white "
              type="button"
              id="button-addon2"
              onClick={resetHandler}
            >
              <FontAwesomeIcon className="" icon="fa-solid fa-xmark" />{" "}
            </button>
          )}
        </InputGroup>
      </form>

      <Modal
        className="radio-custom"
        // show={showLogListModal}
        // onHide={closeLogListModalHandler}
        centered
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header className="bg-secondary text-white" closeButton>
          <Modal.Title>科別欄位</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* {listData.map((item) => (
            <ClinicDetailLog
              key={item.id}
              item={item}
              readonly={true}
            ></ClinicDetailLog>
          ))} */}
          {/* <Modal_AddLog action={"new"}></Modal_AddLog> */}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            className="text-white w-25"
            // onClick={showAddLogModalHandler}
          >
            新增紀錄
          </Button>
          <Button
            variant="secondary"
            // onClick={closeLogListModalHandler}
          >
            取消
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default SearchFilter;
