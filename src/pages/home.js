import React, { Fragment, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Search from "../component/home/search";
import "../scss/home.scss";
import ClinicListItem from "../component/home/clinic-list-item";
import PaginationUI from "../component/home/pagination";
import { Button } from "react-bootstrap";

import {
  onCityChange,
  onClinicNameChange,
  onClinicStatusChange,
  onDateSortChange,
  onDistrictChange,
} from "../store/filter-clinic-list-slice";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import appConfig from "../app-config";
import appSlice, { appAction } from "../store/app-slice";

let qqq = [];

const Home = () => {
  const [dateSort, setDateSort] = useState(false);
  const appSlice = useSelector(state => state.appSlice)
  let dispatch = useDispatch();
  let history = useHistory();
  const dateSortHandler = () => {
    // false 順
    // true 逆
    setDateSort(!dateSort);
    dispatch(onDateSortChange(!dateSort));
  };

  useEffect(() => {

    // const urlParams = new URLSearchParams()
    // urlParams.append("userID", "admin@sprinf.com")
    // urlParams.append("password", "12345678")
    // const queryString = urlParams.toString()
    // const apiUrl = `${appConfig.url}?${queryString}`

    // console.log(urlParams)
    const fetchApi = async() => {
      let url = "https://pay.sprinf.com/api/clinic/info?clinic=7478412"
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json()
      console.log("api response is: ")
      console.log(data)
    }

    // fetchApi()

    if (!appSlice.isLogin) {
      history.push("/login");
    }
 
    // todo API GET clinic_List
    qqq = [
      {
        id: "c1",
        name: "cxxx診所",
        phone: "0921231434",
        city: "台北市",
        district: "大安區",
        road: "瑞光路4段18號5-5",
        visitor_id: "dfasdfasdf",
        visitor_name: "阿民",
        visit_datetime: "2023/2/25",
        clinic_status: "可電訪",
      },
      {
        id: "c2",
        name: "家齊診所",
        phone: "0921231434",
        city: "台北市",
        district: "大安區",
        road: "阿民路4段18號5-5",
        visitor_id: "dfasdf",
        visitor_name: "龍哥",
        visit_datetime: "2023/2/25",
        clinic_status: "可回訪",
      },
      {
        id: "c3",
        name: "捷克診所",
        phone: "0921231434",
        city: "台北市",
        district: "大安區",
        road: "瑞光路4段18號5-5",
        visitor_id: "dfasdf",
        visitor_name: "大艾",
        visit_datetime: "2023/2/25",
        clinic_status: "結案",
      },
      {
        id: "c4",
        name: "高地植髮診所",
        phone: "0921231434",
        city: "台北市",
        district: "大安區",
        road: "阿民路4段18號5-5",
        visitor_id: "dfasedfsdf",
        visitor_name: "龍哥",
        visit_datetime: "2023/2/25",
        clinic_status: "可電訪",
      },
    ];
  }, []);
  // search13
  return (
    <Fragment>
      <div className="w-100 mt-3 padding-RWD">
        <Search></Search>
      </div>
      <div className="w-100 padding-RWD mt-3">
        <h4 className="text-center fw-bolder text-dark">診所列表</h4>
        <div className="d-flex align-items-end tableSort mb-2">
          <div className="me-3 text-dark fw-bold">3 / 15 頁 ，共500筆</div>
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
            {qqq.map((item) => (
              <ClinicListItem key={item.id} item={item}></ClinicListItem>
            ))}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-center w-100">
        <PaginationUI></PaginationUI>
      </div>
    </Fragment>
  );

  // list listItem
};
export default Home;
