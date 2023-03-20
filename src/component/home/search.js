import React, { Fragment, useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputGroup, Dropdown, DropdownButton, Form } from "react-bootstrap";
import {
  onCityChange,
  onClinicNameChange,
  onClinicStatusChange,
  onDateSortChange,
  onDistrictChange,
} from "../../store/filter-clinic-list-slice";
import { useDispatch, useSelector } from "react-redux";
// import TWzipcode from "react-twzipcode";
import jsonData from "../../twzipcode.json";
const styles = {
  borderRadius: `10px 0 0 10px`,
};

const Search = () => {
  let dispatch = useDispatch();
  let clinicNameRef = useRef(null);
  let filterClinicList = useSelector((store) => store.filterClinicList);

  let { city, clinicName, clinic_status, dateSort, district, pages } =
    filterClinicList;

  // console.log(filterClinicList,"filterClinicList",district)
  const [clinicStatus, setClinicStatus] = useState("不分");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [districts, setDistricts] = useState([]);

  useEffect(() => {
    // TODO API POST clinic_list 參數
    if (selectedCity) {
      setDistricts(Object.keys(jsonData[selectedCity]));
    }
    console.log(filterClinicList, "filterClinicList in useEffect");

  }, [filterClinicList]);
  const clinicStatusHandler = (e) => {
    let value = e.target.value;
    dispatch(onClinicStatusChange(value));
  };
  const clinicNameSearch = () => {
    let value = clinicNameRef.current.value || "";
    dispatch(onClinicNameChange(value));
    clinicNameRef.current.value = "";
  };
  const cityChange = (e) => {
    let value = e.target.value;
    setSelectedCity(value);
    dispatch(onCityChange(value));
  };
  const districtChange = (e) => {
    let value = e.target.value;
    setSelectedDistrict(value);
    dispatch(onDistrictChange(value));
  };

  return (
    <Fragment>
      <form className="p-3 search">
        <div className="d-flex align-items-center mb-2 search-clinicStatus">
          <label className="">診所狀態:</label>
          <Form.Select
            aria-label="Default select example"
            className="widthRWD-40 "
            onChange={clinicStatusHandler}
          >
            <option value="不分">不分</option>
            <option value="可回訪">可回訪</option>
            <option value="可電訪">可電訪</option>
            <option value="結案">結案</option>
          </Form.Select>
        </div>

        <div className="d-flex align-items-center pb-2 ">
          <div className="d-flex align-items-center widthRWD">
            <div>
              <select
                className="county-sel"
                value={selectedCity}
                // value={city}
                onChange={(e) => cityChange(e)}
              >
                {/* <option value="">不分城市</option> */}
                {Object.keys(jsonData).map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
              <select
                className="district-sel"
                value={selectedDistrict}
                // value={districts}
                // onChange={(e) =>dispatch(onDistrictChange(e.target.value))}
                onChange={(e) => districtChange(e)}
                disabled={!districts.length}
              >
                {/* <option value="">不分區</option> */}
                {districts.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <FontAwesomeIcon
            className="fs-4 text-danger"
            icon="fas fa-times-circle"
          />
        </div>
        <InputGroup className="" size="sm">
          <Form.Control
            placeholder="搜尋診所名稱..."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            ref={clinicNameRef}
          />
          <button
            className="btn btn-secondary"
            type="button"
            id="button-addon2"
            onClick={clinicNameSearch}
          >
            <FontAwesomeIcon icon="fas fa-search" />
          </button>
        </InputGroup>
      </form>
    </Fragment>
  );
};

export default Search;
