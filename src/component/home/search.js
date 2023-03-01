import React, { Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Dropdown from 'react-bootstrap/Dropdown';
import { InputGroup, Dropdown, DropdownButton, Form } from "react-bootstrap"
// import Search from "../component/home/search";
// import ClinicList from "../component/home/clinic-list"
import TWzipcode from 'react-twzipcode';
const styles = {
    borderRadius: `10px 0 0 10px`
}


const Search = () => {
    const handleChange = (data) => {
        console.log(data);
    };
    return (<Fragment>

        <form className="p-3 search">
            <div className="d-flex align-items-center pb-2 ">
                <div className=" d-flex align-items-center widthRWD ">
                    {/* <select className="form-select me-3" aria-label="Default select example">
                        <option selected>--城市--</option>
                        <option value="1">台北市</option>
                        <option value="2">新北市</option>
                        <option value="3">基隆市</option>
                    </select>
                    <select className="form-select me-3" aria-label="Default select example">
                        <option selected>--區域--</option>
                        <option value="1">大安區</option>
                        <option value="2">松山區</option>
                        <option value="3">萬華區</option>
                    </select> */}
                    <TWzipcode css={['county-sel', 'district-sel', 'zipcode']}
                        districtValue="內湖區"
                        countyValue="台北市"
                        // districtFieldName="qwqqq"
                        // countyFieldName="sdfasdfasd"
                        // countyFieldName=""
                        // districtFieldName=""
                        handleChangeCounty={handleChange}
                        handleChangeDistrict={handleChange}
                    />
                </div>

                <FontAwesomeIcon className="fs-4 text-danger" icon="fas fa-times-circle" />

            </div>
            <InputGroup className="" size="sm">
                <Form.Control
                    placeholder="搜尋診所名稱..."
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <button className="btn btn-secondary" type="button" id="button-addon2"><FontAwesomeIcon icon="fas fa-search" /></button>
            </InputGroup>
            {/* <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                    Button
                </Button>
            </InputGroup> */}
        </form>
    </Fragment>)


    // list listItem
}
export default Search