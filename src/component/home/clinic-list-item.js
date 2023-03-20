import React, { Fragment, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Search from "../component/home/search";
// import ClinicList from "../component/home/clinic-list"
import { useHistory, Link } from "react-router-dom";
import { Button, Modal, Form, Accordion } from "react-bootstrap";
import Modal_AddLog from "./log/modal-add-log";
import ClinicDetailLog from "./clinic-detail-log";
import {
  setToday,
  setClinicID,
  onSalesChange,
  resetState,
} from "../../store/log-writing-slice";
import { useDispatch, useSelector } from "react-redux";
let logListArr = [];
// let nowToday = "";
const nowTodayChange = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const date = String(now.getDate()).padStart(2, "0");
  const hour = String(now.getHours()).padStart(2, "0");
  const minute = String(now.getMinutes()).padStart(2, "0");

  return `${year}/${month}/${date} ${hour}:${minute}`;
};
const ClinicListItem = (props) => {
  // ClinicListItem13
  let { item } = props;
  let log_Detail = useSelector((state) => state.log_writingSlice);
  let dispatch = useDispatch();

  // console.log(item, "itemmm");
  const goPath = useHistory(); //設常數接收useHistory()回傳的物件
  const onMoreClinicDetail = () => {
    goPath.push(`/clinic/${item.id}`);
  };
  const [showAddLogModal, setShowAddLogModal] = useState(false);
  const [showLogListModal, setShowLogListModal] = useState(false);
  // const [isOpen, setIsOpen] = useState(true);

  const handleAddLogModal = () => {
    // 新增log
    // 診所列表上的LOG的延伸modal
    let nowToday = nowTodayChange();
    dispatch(setToday(nowToday));
    dispatch(setClinicID(item.id));
    let token = "撈cookies 的token";
    dispatch(onSalesChange(token));
    dispatch(resetState());

    // TODO  POST API LOG (new)
    setShowAddLogModal(!showAddLogModal);
  };
  const handleLogListModal = () => {
    // TODO GET API LOG_LIST justneed 5 no page
    setShowLogListModal(!showLogListModal);
  };
  useEffect(() => {
    // TODO　GET LOG LIST just need the first 5item
    logListArr = [
      {
        id: "fgretlgwrlg",
        visitor_id: "dfasdfa6876sdf",
        visitor_name: "阿民",
        content:
          "經過與醫師討論後，決定先初次使用看看叫號功能，後續再與我們聯絡。",
        visit_category: "教育訓練",
        visit_datetime: "2023/03/06 9:30",
        now_datetime: "2023/03/06 9:30",
        isApproval: false,
        clinic_status: "可電訪",
      },
      {
        id: "fgretlgwrlsdassadg",
        visitor_id: "dfasdfa76666sdf",
        visitor_name: "龍哥",
        content:
          "經過與醫師討論後，決定先初次使用看看叫號功能，後續再與我們聯絡。",
        visit_category: "初訪",
        visit_datetime: "2023/03/06 9:30",
        now_datetime: "2023/03/06 9:30",
        isApproval: false,
        clinic_status: "結案",
      },
      {
        id: "fgret96885lgwwrlg",
        visitor_id: "dfasdfdefqqeasdf",
        visitor_name: "turtle",
        content:
          "經過與醫師討論後，決定先初次使用看看叫號功能，後續再與我們聯絡。",
        visit_category: "電訪",
        visit_datetime: "2023/03/06 9:30",
        now_datetime: "2023/03/06 9:30",
        isApproval: false,
        clinic_status: "可回訪",
      },
      {
        id: "fgretl7865785gwrlg",
        visitor_id: "dfasdfasdwdwwukiukoliof",
        visitor_name: "elephant",
        content:
          "經過與醫師討論後，決定先初次使用看看叫號功能，後續再與我們聯絡。",
        visit_category: "回訪",
        visit_datetime: "2023/03/06 9:30",
        now_datetime: "2023/03/06 9:30",
        isApproval: false,
        clinic_status: "可電訪",
      },
      {
        id: "fgretlg785785fgdfgfdgsdwrlg",
        visitor_id: "dfasdfasdf",
        visitor_name: "DOG",
        content:
          "經過與醫師討論後，決定先初werqwer次使用看看叫號功能，後續再與我們聯絡。",
        visit_category: "教育訓練",
        visit_datetime: "2023/03/06 9:30",
        now_datetime: "2023/03/06 9:30",
        isApproval: false,
        clinic_status: "可電訪",
      },
    ];
  }, []);
  return (
    <Fragment>
      <tr className="align-middle">
        <th data-th="診所名(機構代碼):" scope="row">
          <div>{item.name}</div>
          <div>{item.id}</div>
        </th>
        <td className="td-address" data-th="地址:">
          <section>
            <div>
              {item.city}/{item.district}
            </div>
            <div>{item.road}</div>
          </section>
        </td>
        <td data-th="電話:">{item.phone}</td>
        <td data-th="拜訪人:">{item.visitor_name}</td>
        <td data-th="狀態:">{item.clinic_status}</td>
        <td data-th="日期:">{item.visit_datetime}</td>
        <td data-th="" className="table-log">
          <Button
            onClick={handleLogListModal}
            className="btn-sm w-100 text-light"
            variant="success"
          >
            Log
          </Button>{" "}
        </td>
        <td className="buttonIcon table-more">
          <button
            onClick={onMoreClinicDetail}
            className="btn w-100 btn-sm btn-dark"
          >
            更多...
          </button>
        </td>
      </tr>
      {/* log列表 */}
      <Modal
        className="radio-custom"
        show={showLogListModal}
        onHide={handleLogListModal}
        centered
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header className="bg-secondary text-white" closeButton>
          <Modal.Title>log列表</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {logListArr.map((item) => (
            <ClinicDetailLog
              key={item.id}
              item={item}
              readonly={true}
            ></ClinicDetailLog>
          ))}
          {/* <Modal_AddLog action={"new"}></Modal_AddLog> */}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            className="text-white w-25"
            onClick={handleAddLogModal}
          >
            新增Log
          </Button>
          <Button variant="secondary" onClick={handleLogListModal}>
            取消
          </Button>
        </Modal.Footer>
      </Modal>
      {/* 新增log */}
      <Modal
        className="radio-custom"
        show={showAddLogModal}
        onHide={handleAddLogModal}
        centered
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header className="bg-secondary text-white" closeButton>
          <Modal.Title>新增log</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Modal_AddLog clinic_id={item.id} action={"new"}></Modal_AddLog>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            className="text-white w-25"
            onClick={handleAddLogModal}
          >
            送出
          </Button>
          <Button variant="secondary" onClick={handleAddLogModal}>
            取消
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );

  // list listItem
};
export default ClinicListItem;
