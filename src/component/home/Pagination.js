import React, { Fragment, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pagination from "react-bootstrap/Pagination";

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
const totalPages = 100

let active = 3
const range = 3 // 顯示的範圍
const filteredArray = array.filter(
  (item) => Math.abs(item.number - active) <= range
);

const PaginationUI = (props) => {
  const [page, setPage] = useState(1)

  const pageNumHandler = (pageNumber) => {
    setPage(pageNumber)
    props.onPageChange(pageNumber)
  }

  const pagePrevHandler = () => {
    let newPage = page - 1;
    if (newPage < 1) {
      return
    }

    setPage(newPage)
    props.onPageChange(newPage)
  }

  const pageNextHandler = () => {
    let newPage = page + 1;
    if (newPage > totalPages) {
      return
    }

    setPage(newPage)
    props.onPageChange(newPage)
  }

  const qqq = filteredArray.map((item) => (
    // why onClick ?
    <Pagination.Item
      onClick={() => pageNumHandler(item.number)}
      active={item.number === page}
      key={item.number}
    >
      {item.number}
    </Pagination.Item>
  ))

  return (
    <Fragment>
      <Pagination variant="secondary">
        {/* <Pagination.First /> */}
        {page > 5 && <Pagination.Prev onClick={pagePrevHandler} />}
        {qqq}
        <Pagination.Next onClick={pageNextHandler} />
        {/* <Pagination.Last /> */}
      </Pagination>
    </Fragment>
  );
};
export default PaginationUI;
