import React, { Fragment, useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputGroup, Dropdown, DropdownButton, Form } from "react-bootstrap";
import TWzipcode from "react-twzipcode";
import data from "../../twzipcode.json"
const styles = {
  borderRadius: `10px 0 0 10px`,
};

const Search = () => {
    console.log(data,"datadatadata")
  const [county, setCounty] = useState("台北市");
  const [district, setDistrict] = useState("請選擇");
  //   const twzipcodeRef = useRef(null);

  //   useEffect(() => {
  //     if (twzipcodeRef.current) {
  //       const countySelect = twzipcodeRef.current.querySelector(".county-sel");
  //       const newOption = document.createElement("option");
  //       newOption.value = "不分區";
  //       newOption.text = "不分區";
  //       countySelect.add(newOption);
  //     }
  //   }, [twzipcodeRef]);

  const handleChangeCounty = (data) => {
    setCounty(data.county);
  };

  const handleChangeDistrict = (data) => {
    setDistrict(data.district);
  };

  return (
    <Fragment>
      <form className="p-3 search">
        <div className="d-flex align-items-center pb-2 ">
          <div
            className="d-flex align-items-center widthRWD"
            // ref={twzipcodeRef}
          >
            <TWzipcode
              css={["county-sel", "district-sel", "zipcode"]}
              handleChangeCounty={handleChangeCounty}
              handleChangeDistrict={handleChangeDistrict}
              countyDefaultValue={county} // 設定預設的縣市
              districtDefaultValue={district} // 設定預設的區域
            />
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
