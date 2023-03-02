import React, { Fragment, useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputGroup, Dropdown, DropdownButton, Form } from "react-bootstrap";
// import TWzipcode from "react-twzipcode";
import jsonData from "../../twzipcode.json";
const styles = {
  borderRadius: `10px 0 0 10px`,
};

const Search = () => {
  console.log(jsonData, "datadatadata");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [districts, setDistricts] = useState([]);

  useEffect(() => {
    if (selectedCity) {
      setDistricts(Object.keys(jsonData[selectedCity]));
    }
  }, [selectedCity]);

  return (
    <Fragment>
      <form className="p-3 search">
        <div className="d-flex align-items-center pb-2 ">
          <div className="d-flex align-items-center widthRWD">
            <div>
              <select
                className="county-sel"
                value={selectedCity}
                onChange={(event) => setSelectedCity(event.target.value)}
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
                onChange={(event) => setSelectedDistrict(event.target.value)}
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
          />
          <button
            className="btn btn-secondary"
            type="button"
            id="button-addon2"
          >
            <FontAwesomeIcon icon="fas fa-search" />
          </button>
        </InputGroup>
      </form>
    </Fragment>
  );
};

export default Search;
