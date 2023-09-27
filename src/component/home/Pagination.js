import React, { Fragment, useEffect, useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import "../../scss/pagination.scss"
import { useViewport } from "../../useViewport";

const PaginationUI = (props) => {

  const { page, totalPage } = props;
  const { innerWidth } = useViewport();
  const [pages, setPages] = useState([]);
  const [isRwd, setIsRwd] = useState(false);
  useEffect(() => {
    if (innerWidth < 996) {
      setIsRwd(true);
    } else {
      setIsRwd(false);
    }
  }, [innerWidth]);
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

  const pageSkip=(p,t)=>{
    let newPage=0
    if (t==="next") {
      if (page===totalPage) {
        return
      }
      newPage=(page+10>totalPage) ? totalPage: page+10
    }else{
      if (page===1) {
        return
      }
      newPage=(page-10<1) ? 1 : page-10
    }
    props.onPageChange(newPage);
  }

  return (
    <Fragment>
      <Pagination className="" variant="secondary">
        {/* {page - 4 >= 0 && (
          <Pagination.First onClick={() => pageNumHandler(1)} />
        )} */}
        <Pagination.Item onClick={()=>pageSkip(10,"prev")}>{'前10'}</Pagination.Item>
        {<Pagination.Prev onClick={pagePrevHandler} />}
        {isRwd && <Pagination.Item active>{page}</Pagination.Item>}
        {!isRwd &&
          pages.map((pageNum) => (
            <Pagination.Item
              active={pageNum === page}
              key={pageNum}
              onClick={() => pageNumHandler(pageNum)}
            >
              {pageNum}
            </Pagination.Item>
          ))
        }
        {<Pagination.Next onClick={pageNextHandler} />}
        <Pagination.Item onClick={()=>pageSkip(10,"next")}>{'後10'}</Pagination.Item>
        {/* {page + 4 < totalPage && (
          <Pagination.Last onClick={() => pageNumHandler(totalPage)} />
        )} */}
      </Pagination>
    </Fragment>
  );
};

export default PaginationUI;
