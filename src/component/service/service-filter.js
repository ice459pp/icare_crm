import React, { Fragment, useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputGroup, Form, Button, Modal } from "react-bootstrap";

import jsonData from "../../twzipcode.json";
import { filterAction } from "../../store/filter-slice";
import { modalAction } from "../../store/modal-slice";
import { useDispatch, useSelector } from "react-redux";

const SearchFilter = (props) => {
  console.log(props, "propssss");
  let dispatch = useDispatch();
  let filterSlice = useSelector((state) => state.filterSlice);
  let { clinic_status, department, city, district, searchText } = filterSlice;
  let clinicNameRef = useRef(null);
  const [clinicStatus, setClinicStatus] = useState(clinic_status);
  const [selectedCity, setSelectedCity] = useState(city);
  const [selectedDistrict, setSelectedDistrict] = useState(district);
  const [districts, setDistricts] = useState([]);
  const [isSelect, setIsSelect] = useState(false);

  useEffect(() => {
    if (searchText) {
      clinicNameRef.current.value = searchText;
    }
    if (department.length || searchText || clinic_status || city || district) {
      setIsSelect(true);
      return;
    }
    setIsSelect(false);
  }, [department, searchText, city, clinic_status, district]);
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
    setIsSelect(true);
  };
  const searchTextHandler = () => {
    if (!clinicNameRef.current.value) {
      return;
    }
    let value = clinicNameRef.current.value || "";
    props.onSearchText(value);
    setIsSelect(true);
  };
  const cityChangeHandler = (e) => {
    // 城市
    let value = e.target.value;
    setSelectedCity(value);
    setIsSelect(true);
    props.onCityChange(value);
  };
  const districtChangeHandler = (e) => {
    // 區域
    let value = e.target.value;
    setSelectedDistrict(value);
    setIsSelect(true);
    props.onDistrictChange(value);
  };

  const resetHandler = () => {
    props.onStatusChange("");
    setClinicStatus("");

    props.onDepartmentChange("reset");

    clinicNameRef.current.value = "";
    props.onSearchText("");

    setSelectedCity("");
    props.onCityChange("");

    setSelectedDistrict("");
    props.onDistrictChange("");

    setIsSelect(false);
    setSelected([]);
    dispatch(filterAction.resetState());
  };
  const [selected, setSelected] = useState({});

  const closeDepartmentModal = () => {
    dispatch(modalAction.closeModal());
  };
  const addDepartmentHandler = (item) => {
    setSelected((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
    props.onDepartmentChange(item);
  };
  return (
    <Fragment>
      <form className="p-3 search service-search-container">
        <div className="service-search-title">
          <div className="d-flex align-items-center mb-2 search-clinicStatus">
            <label className="">處理狀態:</label>
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
              <option value="棄用">棄用</option>
            </Form.Select>
          </div>
          <div className="d-flex align-items-center mb-2 search-clinicStatus">
            <label className="">搜尋診所:</label>
            <InputGroup className="" size="">
              <Form.Control
                placeholder="搜尋診所、機構代碼"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                defaultValue={sessionStorage.getItem("searchText")}
                ref={clinicNameRef}
              />
            </InputGroup>
          </div>

          <div className="d-flex align-items-center mb-2 search-clinicStatus">
            <label className="">搜尋標題:</label>
            <InputGroup className="" size="">
              <Form.Control
                placeholder="搜尋標題(主題)"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                defaultValue={sessionStorage.getItem("searchText")}
                ref={clinicNameRef}
              />
            </InputGroup>
          </div>

          <div className="d-flex align-items-center mb-2 search-clinicStatus">
            <label className="">搜尋內文:</label>
            <InputGroup className="" size="">
              <Form.Control
                placeholder="搜尋內文"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                defaultValue={sessionStorage.getItem("searchText")}
                ref={clinicNameRef}
              />
            </InputGroup>
          </div>
        </div>
        <div className="service-search-btn mb-2">
          <Button variant="primary">確定</Button>{" "}
          <Button variant="secondary">清除</Button>{" "}
        </div>
      </form>
    </Fragment>
  );
};

export default SearchFilter;
