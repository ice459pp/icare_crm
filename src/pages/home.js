import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../scss/home.scss";
import { Button } from "react-bootstrap";
import SearchFilter from "../component/home/search-filter";
import ClinicListItem from "../component/home/clinic-list-item";
import PaginationUI from "../component/home/pagination";
import { apiClinicList } from "../api/api-clinic-list";
import { appAction } from "../store/app-slice";

const Home = () => {
  const appSlice = useSelector((state) => state.appSlice);
  const dispatch = useDispatch()
  const navigate = useHistory();

  const [clinicList, setClinicList] = useState([]);
  const [filterStatus, setFilterStatus] = useState("");
  const [filterCity, setFilterCity] = useState("");
  const [filterDistrict, setFilterDictrict] = useState("");
  const [searchText, setSearchText] = useState("");
  // normal and reserve
  const [dateSort, setDateSort] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  const statusChangeHandler = (value) => {
    setFilterStatus(value);
  };

  const cityChangeHangle = (value) => {
    setFilterCity(value);
    if (!value) {
      setFilterDictrict("");
    }
  };

  const districtChangeHandler = (value) => {
    setFilterDictrict(value);
  };

  const searchTextHandler = (value) => {
    setSearchText(value);
  };

  const dateSortHandler = () => {
    const sort = !dateSort;
    setDateSort(sort);
  };

  const pageChangeHandler = (value) => {
    setPage(value);
  };

  const logoutHandler = () => {
    dispatch(appAction.logout())
  }

  // this is for login status
  useEffect(() => {
    // check app is login
    if (appSlice.isLogin) {
      const token = appSlice.userToken;

      apiClinicList(
        token,
        page,
        filterCity,
        filterDistrict,
        searchText,
        dateSort,
        filterStatus,
        (err) => {
          alert(err)
          logoutHandler()
        },
        (list, total, totalPage) => {
          setTotalCount(total);
          setTotalPage(totalPage);
          setClinicList(list);
        }
      );
    } else {
      navigate.push("/login");
    }
  }, [
    appSlice.isLogin,
    page,
    filterCity,
    filterDistrict,
    searchText,
    dateSort,
    filterStatus,
  ]);

  return (
    <Fragment>
      <div className="w-100 mt-3 padding-RWD">
        <SearchFilter
          onStatusChange={statusChangeHandler}
          onCityChange={cityChangeHangle}
          onDistrictChange={districtChangeHandler}
          onSearchText={searchTextHandler}
        />
      </div>
      <div className="w-100 padding-RWD mt-3">
        <h4 className="text-center fw-bolder text-dark">診所列表</h4>
        <div className="d-flex align-items-end tableSort mb-2">
          <div className="me-3 text-dark fw-bold">
            {`${page} / ${totalPage}`} 頁 ，共{totalCount}筆
          </div>
          <Button variant="secondary" onClick={dateSortHandler} size="sm">
            日期排序
            {dateSort ? (
              <FontAwesomeIcon className="ms-2" icon="fas fa-arrow-down" />
            ) : (
              <FontAwesomeIcon className="ms-2" icon="fas fa-arrow-up" />
            )}{" "}
          </Button>{" "}
        </div>
        <table className="table table-striped table-hover table-bordered  border-dark table-rwd">
          <thead>
            <tr className="bg-secondary text-white tr-only-hide">
              <th scope="col">診所名(機構代碼)</th>
              <th scope="col">地址</th>
              <th scope="col">電話</th>
              <th scope="col">拜訪人</th>
              <th scope="col">狀態</th>
              <th scope="col">日期</th>
              <th style={{ width: "10%" }}></th>
              <th style={{ width: "10%" }}></th>
            </tr>
          </thead>
          <tbody>
            {clinicList.map((item) => (
              <ClinicListItem key={item.id} item={item}></ClinicListItem>
            ))}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-center w-100">
        <PaginationUI
              page={page}
              totalPage={totalPage}
              onPageChange={pageChangeHandler}
            ></PaginationUI>
      </div>
    </Fragment>
  );

  // list listItem
};
export default Home;
