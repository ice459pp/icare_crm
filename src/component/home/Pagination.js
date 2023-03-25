import React, { Fragment, useEffect, useState } from "react";
import Pagination from "react-bootstrap/Pagination";

const PaginationUI = (props) => {
  const { page, totalPage } = props;
  const [pages, setPages] = useState([]);

  useEffect(() => {
    let pageArr = [];
    if (totalPage <= 10) {
      for (let i = 1; i <= totalPage; i++) {
        pageArr.push(i);
      }
    } else if (page < 6) {
      for (let i = 1; i <= 10; i++) {
        pageArr.push(i);
      }
    } else if (page > totalPage - 5) {
      for (let i = totalPage - 9; i <= totalPage; i++) {
        pageArr.push(i);
      }
    } else {
      for (let i = page - 5; i <= page + 4; i++) {
        pageArr.push(i);
      }
    }
    setPages(pageArr);
  }, [page, totalPage]);

  const pageNumHandler = (pageNumber) => {
    props.onPageChange(pageNumber);
  };

  const pagePrevHandler = () => {
    let newPage = page - 1;
    if (newPage < 1) {
      return;
    }
    props.onPageChange(newPage);
  };

  const pageNextHandler = () => {
    let newPage = page + 1;
    if (newPage > totalPage) {
      return;
    }
    props.onPageChange(newPage);
  };

  return (
    <Fragment>
      <Pagination variant="secondary">
        {page - 4 >= 0 && (
          <Pagination.First onClick={() => pageNumHandler(1)} />
        )}
        <Pagination.Prev onClick={pagePrevHandler} />
        {pages.map((pageNum) => (
          <Pagination.Item
            active={pageNum === page}
            key={pageNum}
            onClick={() => pageNumHandler(pageNum)}
          >
            {pageNum}
          </Pagination.Item>
        ))}
        <Pagination.Next onClick={pageNextHandler} />
        {page + 4 < totalPage && (
          <Pagination.Last onClick={() => pageNumHandler(totalPage)} />
        )}
      </Pagination>
    </Fragment>
  );
};

export default PaginationUI;
