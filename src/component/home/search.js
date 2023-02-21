import React, { Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Dropdown from 'react-bootstrap/Dropdown';

// import Search from "../component/home/search";
// import ClinicList from "../component/home/clinic-list"
const styles={
    borderRadius: `10px 0 0 10px`
}
const Search = () => {
    return (<Fragment>

        <form className="mt-4 p-3 search">
            <div className="d-flex align-items-center pb-2 ">
                <div className=" d-flex align-items-center w-50 ">
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
                <div className="">
                    <FontAwesomeIcon className="fs-4 text-danger" icon="fas fa-times-circle" />
                </div>
            </div>


            <div className="input-group w-50">
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary" style={styles}>
                        地區
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                        <Dropdown.Item href="#/action-1" active>
                            Action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                <button className="btn btn-warning" type="button" id="button-addon2"><FontAwesomeIcon icon="fas fa-search" /></button>
            </div>
        </form>
    </Fragment>)


    // list listItem
}
export default Search