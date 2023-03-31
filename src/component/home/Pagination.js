import React, { Fragment, useEffect, useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import { useViewport } from "../../useViewport";

const PaginationUI = (props) => {
  const { page, totalPage } = props;
  const { width, height } = useViewport();
  const [pages, setPages] = useState([]);
  const [isRwd, setIsRwd] = useState(false);
  useEffect(() => {
    if (width < 576) {
      setIsRwd(true);
    } else {
      setIsRwd(false);
    }
  }, [width]);
  useEffect(() => {
    let pageArr = [];
    if (totalPage <= 5) {
      for (let i = 1; i <= totalPage; i++) {
        pageArr.push(i);
      }
    } else if (isRwd) {
      const startIndex = page - 2;
      for (let i = startIndex; i < startIndex + 5; i++) {
        pageArr.push(i);
      }
    } else {
      let startPage, endPage;
      if (totalPage <= 10) {
        startPage = 1;
        endPage = totalPage;
      } else if (page <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (page + 4 >= totalPage) {
        startPage = totalPage - 9;
        endPage = totalPage;
      } else {
        startPage = page - 5;
        endPage = page + 4;
      }
      for (let i = startPage; i <= endPage; i++) {
        pageArr.push(i);
      }
    }
    pageArr = pageArr.filter((pageNum) => pageNum > 0 && pageNum <= totalPage);
    setPages(pageArr);
  }, [page, totalPage, isRwd]);

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
      <Pagination className="mx-3 my-3" variant="secondary">
        {page - 4 >= 0 && (
          <Pagination.First onClick={() => pageNumHandler(1)} />
        )}
        {isRwd ? null : <Pagination.Prev onClick={pagePrevHandler} />}{" "}
        {pages.map((pageNum) => (
          <Pagination.Item
            active={pageNum === page}
            key={pageNum}
            onClick={() => pageNumHandler(pageNum)}
          >
            {pageNum}
          </Pagination.Item>
        ))}
        {isRwd ? null : <Pagination.Next onClick={pageNextHandler} />}{" "}
        {page + 4 < totalPage && (
          <Pagination.Last onClick={() => pageNumHandler(totalPage)} />
        )}
      </Pagination>
    </Fragment>
  );
};

export default PaginationUI;
