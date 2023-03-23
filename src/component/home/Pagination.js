import React, { Fragment, useEffect, useState } from "react";
import Pagination from "react-bootstrap/Pagination";

const PaginationUI = (props) => {
  const {page, totalPage} = props

  const pageNumHandler = (pageNumber) => {
    props.onPageChange(pageNumber)
  };

  const pagePrevHandler = () => {
    let newPage = page - 1;
    if (newPage < 1) {
      return
    }
    props.onPageChange(newPage)
  };

  const pageNextHandler = () => {
    let newPage = page + 1;
    if (newPage > totalPage) {
      return
    }
    props.onPageChange(newPage)
  };

  // useEffect(() => {
  //   props.onPageChange(page);
  // }, [page]);

  return (
    <Fragment>
      <Pagination variant="secondary">
        {(page - 4 >= 0) && <Pagination.First onClick={() => pageNumHandler(1)} />}
        <Pagination.Prev onClick={pagePrevHandler} />
        {(page - 2 > 0) && <Pagination.Item active={false} key={page - 2} onClick={() => pageNumHandler(page - 2)}>{page - 2}</Pagination.Item>}
        {(page - 1 > 0) && <Pagination.Item active={false} key={page - 1} onClick={() => pageNumHandler(page - 1)}>{page - 1}</Pagination.Item>}
        <Pagination.Item active={true} key={page}>{page}</Pagination.Item>
        {(page + 1 <= totalPage) && <Pagination.Item active={false} key={page + 1} onClick={() => pageNumHandler(page + 1)}>{page + 1}</Pagination.Item>}
        {(page + 2 <= totalPage) && <Pagination.Item active={false} key={page + 2} onClick={() => pageNumHandler(page + 2)}>{page + 2}</Pagination.Item>}
        <Pagination.Next onClick={pageNextHandler} />
        {(page + 2 < totalPage) && <Pagination.Last onClick={() => pageNumHandler(totalPage)} />}
      </Pagination>
    </Fragment>
  );
};
export default PaginationUI;
