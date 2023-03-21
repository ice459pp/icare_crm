import React, { Fragment, useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputGroup, Dropdown, DropdownButton, Form } from "react-bootstrap";
// import TWzipcode from "react-twzipcode";
import jsonData from "../../twzipcode.json";
const styles = {
  borderRadius: `10px 0 0 10px`,
};

const SearchFilter = (props) => {
  let clinicNameRef = useRef(null);

  // console.log(filterClinicList,"filterClinicList",district)
  const [clinicStatus, setClinicStatus] = useState("不分");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [districts, setDistricts] = useState([]);
  
  useEffect(() => {
    if (selectedCity) {
      setDistricts(Object.keys(jsonData[selectedCity]));
    }
  }, []);
  const clinicStatusHandler = (e) => {
    let value = e.target.value
    props.onStatusChange(value)
  }
  const clinicNameSearch = () => {
    let value = clinicNameRef.current.value || "";
    props.onSearchText(value)
    clinicNameRef.current.value = "";
  };
  const cityChange = (e) => {
    let value = e.target.value;
    setSelectedCity(value);
    setDistricts(Object.keys(jsonData[value]))
    props.onCityChange(value)
  };
  const districtChange = (e) => {
    let value = e.target.value;
    setSelectedDistrict(value);
    props.onDistrictChange(value)
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
            <option value="">全部</option>
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
                // value={districts}
                // onChange={(e) =>dispatch(onDistrictChange(e.target.value))}
                onChange={(e) => districtChange(e)}
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

export default SearchFilter;
