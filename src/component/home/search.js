import React, { Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Dropdown from 'react-bootstrap/Dropdown';
import { InputGroup, Dropdown, DropdownButton, Form } from "react-bootstrap"
// import Search from "../component/home/search";
// import ClinicList from "../component/home/clinic-list"
const styles = {
    borderRadius: `10px 0 0 10px`
}
const Search = () => {
    return (<Fragment>

        <form className="p-3 search">
            <div className="d-flex align-items-center pb-2 ">
                <div className=" d-flex align-items-center widthRWD ">
                    <select className="form-select me-3" aria-label="Default select example">
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
                    </select>
                </div>
                
                    <FontAwesomeIcon className="fs-4 text-danger" icon="fas fa-times-circle" />
                
            </div>
            <InputGroup className="" size="sm">
                <DropdownButton
                    variant="outline-secondary"
                    title="地區"
                    id="input-group-dropdown-1"
                >
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </DropdownButton>
                <Form.Control aria-label="Text input with dropdown button" />
                <button className="btn btn-secondary" type="button" id="button-addon2"><FontAwesomeIcon icon="fas fa-search" /></button>
            </InputGroup>
        </form>
    </Fragment>)


    // list listItem
}
export default Search