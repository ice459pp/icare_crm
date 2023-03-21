import React, { Fragment, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pagination from "react-bootstrap/Pagination";
// import filterClinicListSlice from "../../store/filterClinicListSlice";
// import Search from "../component/home/search";
// import "../scss/home.scss"
// import ClinicListItem from "../component/home/clinic-list-item"\
const array = [
  { number: 1 },
  { number: 2 },
  { number: 3 },
  { number: 4 },
  { number: 5 },
  { number: 6 },
  { number: 7 },
  { number: 8 },
  { number: 9 },
  { number: 10 },
  { number: 11 },
  { number: 12 },
  { number: 13 },
  { number: 14 },
  { number: 15 },
];
let pages = 100
let active = 3
const range = 3 // 顯示的範圍
const filteredArray = array.filter(
  (item) => Math.abs(item.number - active) <= range
);

const PaginationUI = () => {
  const handlePageClick = (pageNumber) => {
    console.log(pageNumber, "page")
  }
  const qqq = filteredArray.map((item) => (
    <Pagination.Item
      onClick={() => handlePageClick(item.number)}
      active={item.number === pages}
      key={item.number}
    >
      {item.number}
    </Pagination.Item>
  ))
  const onPrevChange = () => {
    let newPage = pages - 1;
    if (newPage < 1) {
      return;
    }
    
  }
  const onNextChange = () => {
    let newPage = pages + 1;
    // 最大頁數
    if (newPage > 6) {
      return;
    }
  }
  return (
    <Fragment>
      <Pagination variant="secondary">
        {/* <Pagination.First /> */}
        <Pagination.Prev onClick={onPrevChange} />
        {qqq}
        <Pagination.Next onClick={onNextChange} />
        {/* <Pagination.Last /> */}
      </Pagination>
    </Fragment>
  );
};
export default PaginationUI;
