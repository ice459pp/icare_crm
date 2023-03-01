import React, { Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Pagination from 'react-bootstrap/Pagination';

// import Search from "../component/home/search";
// import "../scss/home.scss"
// import ClinicListItem from "../component/home/clinic-list-item"\
const array = [
    { number: 1 }, { number: 2 }, { number: 3 }, { number: 4 }, { number: 5 }, { number: 6 }, { number: 7 }, { number: 8 },
    { number: 9 }, { number: 10 }, { number: 11 }, { number: 12 }, { number: 13 }, { number: 14 },
    { number: 15 }
]
let active = 3
const range = 3; // 顯示的範圍
const filteredArray = array.filter(item => Math.abs(item.number - active) <= range);
const PaginationUI = () => {
    const qqq = filteredArray.map(item => <Pagination.Item active={item.number === active} key={item.number}>{item.number}</Pagination.Item>)
    return (<Fragment>
        <Pagination variant="secondary">
            {/* <Pagination.First /> */}
            <Pagination.Prev />
            {qqq}
            <Pagination.Next />
            {/* <Pagination.Last /> */}
        </Pagination>
    </Fragment>)
}
export default PaginationUI