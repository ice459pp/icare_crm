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
import { useDispatch, useSelector } from "react-redux";

const styles = {
  borderRadius: `10px 0 0 10px`,
};
let departmentArr = [
  "不分科",
  "職業醫學科",
  "臨床病理科",
  "整形外科",
  "齒顎矯正科",
  "精神科",
  "解剖病理科",
  "復健科",
  "麻醉科",
  "眼科",
  "婦產科",
  "骨科",
  "神經科",
  "神經外科",
  "病理科",
  "特殊需求者口腔醫學科",
  "核子醫學科",
  "家醫科",
  "家庭牙醫科",
  "洗腎科",
  "急診醫學科",
  "泌尿科",
  "放射線科",
  "放射診斷科",
  "兒童牙科",
  "兒科",
  "耳鼻喉科",
  "皮膚科",
  "外科",
  "牙髓病科",
  "牙科",
  "牙周病科",
  "內科",
  "中醫一般科",
  "口腔顎面外科",
];

const SearchFilter = (props) => {
  let dispatch = useDispatch();
  let filterSlice = useSelector((state) => state.filterSlice);
  let { clinic_status, department, city, district, searchText } = filterSlice;
  let clinicNameRef = useRef(null);
  const [clinicStatus, setClinicStatus] = useState(
    clinic_status
    // sessionStorage.getItem("clinic_status")
  );
  const [selectedCity, setSelectedCity] = useState(
    city
    // sessionStorage.getItem("city")
  );
  const [selectedDistrict, setSelectedDistrict] = useState(
    district
    // sessionStorage.getItem("district")
  );
  const [districts, setDistricts] = useState([]);
  const [isSelect, setIsSelect] = useState(false);
  const [departmentState, setDepartmentState] = useState(
    department
    // sessionStorage.getItem("clinic_status")
  );
  // useEffect(() => {
  //   if (!departmentState) {
  //     console.log(departmentState,"deeeee")
  //     setIsSelect(false)
  //   }
  // }, [departmentState]);
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
    setClinicStatus(value);
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
    // 診所進度
    props.onStatusChange("");
    setClinicStatus("");

    // 日期排序
    // props.onMutationHandler("");

    // 科別
    props.onDepartmentChange("reset");

    // 搜尋欄位
    clinicNameRef.current.value = "";
    props.onSearchText("");

    // 城市
    setSelectedCity("");
    props.onCityChange("");

    // 地區
    setSelectedDistrict("");
    props.onDistrictChange("");

    setIsSelect(false);
    dispatch(filterAction.resetState());
  };
  const [departmentIsShow, setDepartmentIsShow] = useState(false);

  const showDepartmentModal = () => {
    props.onSubmitDepartment();
    setDepartmentIsShow(!departmentIsShow);
  };
  const closeDepartmentModal = () => {
    setDepartmentIsShow(false);
  };

  const addDepartmentHandler = (e) => {
    props.onDepartmentChange(e);
  };
  return (
    <Fragment>
      <form className="p-3 search">
        <div className="d-flex align-items-center mb-2 search-clinicStatus">
          <label className="">診所進度:</label>
          <Form.Select
            aria-label="Default select example"
            className="widthRWD-40 "
            onChange={(e) => clinicStatusHandler(e)}
            value={clinicStatus}
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
            <option value="成交" selected={clinicStatus === "成交"}>
              成交
            </option>
            <option value="棄用" selected={clinicStatus === "棄用"}>
              棄用
            </option>
          </Form.Select>
        </div>
        <div className="d-flex align-items-center mb-2 search-clinicStatus">
          <label className="">選擇科別:</label>
          <Button
            onClick={showDepartmentModal}
            className="btn-sm w-25 text-light"
            variant="primary"
          >
            科別
          </Button>
        </div>
        <div className="filter-department-zone">
          {department.map((item) => (
            <Button className="" key={item} variant="dark" size="sm">
              {item}
              <FontAwesomeIcon
                onClick={() => addDepartmentHandler(item)}
                className="text-danger x-mark"
                icon="fa-solid fa-circle-xmark"
                style={{ backgroundColor: "white" }}
              />
            </Button>
          ))}
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
              <FontAwesomeIcon className="" icon="fa-solid fa-xmark" />
            </button>
          )}
        </InputGroup>
      </form>

      <Modal
        className="radio-custom"
        show={departmentIsShow}
        onHide={closeDepartmentModal}
        centered
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header className="bg-secondary text-white" closeButton>
          <Modal.Title>科別欄位</Modal.Title>
        </Modal.Header>
        <Modal.Body className="departmentModal">
          <div className="title">科別:</div>
          {departmentArr.map((item) => (
            <Button
              onClick={() => addDepartmentHandler(item)}
              className="mx-1 mt-2 fs-6"
              key={item}
              variant="primary"
              size="sm"
            >
              {item}
            </Button>
          ))}
          <div className="title mt-3">目前選擇:</div>
          {department.map((item) => (
            <Button
              className="mx-1 me-2 mt-3 fs-6"
              key={item}
              variant="dark"
              size="sm"
            >
              {item}
              <FontAwesomeIcon
                onClick={() => addDepartmentHandler(item)}
                className="text-danger x-mark bg-white"
                icon="fa-solid fa-circle-xmark"
              />
            </Button>
          ))}
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
            onClick={showDepartmentModal}
          >
            確定
          </Button>
          {/* <Button variant="secondary" onClick={closeDepartmentModal}>
            取消
          </Button> */}
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default SearchFilter;
