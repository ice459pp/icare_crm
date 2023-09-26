import React, { Fragment, useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputGroup, Form, Button, Modal } from "react-bootstrap";

import jsonData from "../../twzipcode.json";
import { filterAction } from "../../store/filter-slice";
import { modalAction } from "../../store/modal-slice";
import { useDispatch, useSelector } from "react-redux";

let departmentArr = [
  "不分科",
  "耳鼻喉科",
  "皮膚科",
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
  "家醫科",
  "家庭牙醫科",
  "洗腎科",
  "急診醫學科",
  "泌尿科",
  "放射線科",
  "放射診斷科",
  "兒童牙科",
  "兒科",
  "外科",
  "牙髓病科",
  "牙科",
  "牙周病科",
  "內科",
  "中醫一般科",
  "口腔顎面外科",
  "職業醫學科",
  "臨床病理科",
  "病理科",
  "特殊需求者口腔醫學科",
  "核子醫學科",
];
let visitorArr = [{ id: "123", name: "Tom" }, { id: "333", name: "Jason" }, { id: "889", name: "QQA" }, { id: "qw3", name: "j6jj66j6" }]

const SearchFilter = (props) => {
  let dispatch = useDispatch();
  let filterSlice = useSelector((state) => state.filterSlice);
  let { clinic_status, department, city, district, searchText, visitor } = filterSlice;
  let clinicNameRef = useRef(null);
  const [clinicStatus, setClinicStatus] = useState(clinic_status);
  const [selectedCity, setSelectedCity] = useState(city);
  const [selectedDistrict, setSelectedDistrict] = useState(district);
  const [districts, setDistricts] = useState([]);
  // const [isSelect, setIsSelect] = useState(false);
  const [isKeyword, setIsKeyword] = useState(false);
  // const [keywordValue, setKeywordValue] = useState(false);
  const [selectAll, setSelectAll] = useState(true);
  const [departmentIsShow, setDepartmentIsShow] = useState(false);
  const [selected, setSelected] = useState({});
  const [selectVisitor, setSelectVisitor] = useState(visitor);
  useEffect(() => {
    // console.log(searchText, "searchText", clinicNameRef.current.value, "clinicNameRef.current.value ", isKeyword, "isKeyword")
    if (searchText) {
      clinicNameRef.current.value = searchText;
      setIsKeyword(true)
    } else {
      setIsKeyword(false);
    }
    // if (department.length || searchText || clinic_status || city || district) {
    //   // setIsSelect(true);
    //   return;
    // }

  }, [searchText]);
  useEffect(() => {
    if (selectedCity) {
      setDistricts(Object.keys(jsonData[selectedCity]));
    } else {
      setDistricts([]);
    }
  }, [selectedCity]);
  useEffect(() => {
    setSelectedDistrict(district);
  }, [district]);
  const clinicStatusHandler = (e) => {
    let value = e.target.value;
    props.onStatusChange(value);
    setClinicStatus(value);
  };
  const searchTextHandler = () => {
    if (!clinicNameRef.current.value) {
      return;
    }
    let value = clinicNameRef.current.value || "";
    props.onSearchText(value);
    setIsKeyword(true);
  };
  const cityChangeHandler = (e) => {
    // 城市
    let value = e.target.value;
    setSelectedCity(value);
    // setIsSelect(true);
    props.onCityChange(value);
  };
  const districtChangeHandler = (e) => {
    // 區域
    let value = e.target.value;
    setSelectedDistrict(value);
    // setIsSelect(true);
    props.onDistrictChange(value);
  };

  const resetHandler = () => {
    // props.onStatusChange("");
    // setClinicStatus("");

    // props.onDepartmentChange("reset");

    // setSelectedCity("");
    // props.onCityChange("");

    // setSelectedDistrict("");
    // props.onDistrictChange("");

    clinicNameRef.current.value = "";
    props.onSearchText("");
    dispatch(filterAction.resetState());
    setIsKeyword(false);
    setSelected([]);
  };


  const showDepartmentModal = () => {
    dispatch(modalAction.showModal());
    setDepartmentIsShow(true);
  };
  const closeDepartmentModal = () => {
    dispatch(modalAction.closeModal());
    setDepartmentIsShow(false);
  };
  const addDepartmentHandler = (item) => {
    console.log(item,"item",selected,"selected")
    setSelected((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
    props.onDepartmentChange(item);
  };
  const selectAllHandler = () => {
    console.log(selectAll,"selectAll")
    setSelectAll(!selectAll);
    // setSelected((prev) => {console.log(prev,"prev")});
  };
  const visitorHandler = (e) => {
    let value = e.target.value;
    setSelectVisitor(value)

    // setClinicStatus(value);
    // setIsSelect(true);
    props.onVisitorChange(value);
  }
  const handleInputKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      searchTextHandler()

    }
  }
  return (
    <Fragment>
      <form className="p-3 search">
        <div className="d-flex align-items-center search-clinicStatus ">
          <div className="clinicStatus">
            {" "}
            <label className="">
              {" "}
              <span className="name">診所進度</span>{" "}
              <span className="bit">:</span>
            </label>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => clinicStatusHandler(e)}
              value={clinicStatus}
            >
              <option value="">全部</option>
              <option value="可回訪">可回訪</option>
              <option value="可電訪">可電訪</option>
              <option value="結案">結案</option>
              <option value="成交">成交</option>
              <option value="未使用">未使用</option>
              <option value="已註冊">已註冊</option>
            </Form.Select>
          </div>

          <div className="visitorSelect">
            {" "}
            <label className="">
              {" "}
              <span className="name">拜訪人</span>{" "}
              <span className="bit">:</span>
            </label>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => visitorHandler(e)}
              value={selectVisitor}
            >
              <option value="">無</option>
              {visitorArr.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
            </Form.Select>
          </div>
        </div>
        <div className="d-flex align-items-center search-clinicStatus">
          <div className="departmentSelect">
            <label className="">
              {" "}
              <span className="name">選擇科別</span>{" "}
              <span className="bit">:</span>
            </label>
            <Button
              onClick={showDepartmentModal}
              className="btn-sm w-100 text-light"
              variant="primary"
            >
              科別
            </Button>
          </div>
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
        <div className="d-flex align-items-center pb-2 filter-address ">
          <div className="d-flex align-items-center widthRWD citySelect">
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
            onKeyPress={handleInputKeyPress}
          />
          <button
            className="btn btn-secondary"
            type="button"
            id="button-addon2"
            onClick={searchTextHandler}
          >
            <FontAwesomeIcon icon="fas fa-search" />
          </button>
          {isKeyword && (
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
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header className="bg-secondary text-white" closeButton>
          <Modal.Title>選擇科別欄位</Modal.Title>
        </Modal.Header>
        <Modal.Body className="departmentModal">
          <div className="title">
            {" "}
            <span> 科別: </span>{" "}
            {selectAll ? (
              <button
                onClick={selectAllHandler}
                className="btn btn-sm  btn_changeAll primary"
              >
                全選
              </button>
            ) : (
              <button
                onClick={selectAllHandler}
                className="btn btn-sm  btn_changeAll danger"
              >
                取消全選
              </button>
            )}{" "}
          </div>
          {departmentArr.map((item) => (
            <Button
              onClick={() => addDepartmentHandler(item)}
              className={`mx-1 mt-2 fs-6  border-0 ${selected[item] ? "bg-warning" : "bg-primary"
                }`}
              key={item}
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
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            className="text-white w-25"
            onClick={closeDepartmentModal}
          >
            確定
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default SearchFilter;
