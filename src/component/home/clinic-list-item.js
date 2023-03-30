import React, { Fragment, useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Button, Modal, Form, Accordion } from "react-bootstrap";
import ModalAddLog from "./log/modal-add-log";
import ClinicDetailLog from "./clinic-detail-log";

import { useDispatch, useSelector } from "react-redux";
import { apiLogList } from "../../api/api-clinic-log";
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
  let { item } = props;
  const appSlice = useSelector((state) => state.appSlice);
  const navigate = useHistory();

  const moreDetailHandler = () => {
    navigate.push(`/clinic/${item.id}`);
  };

  const [listData, setListData] = useState([]);
  const [showAddLogModal, setShowAddLogModal] = useState(false);
  const [showLogListModal, setShowLogListModal] = useState(false);
  const [refreshLog, setRefreshLog] = useState(false);
  const [page, setPage] = useState(1);

  const handleAddLogModal1 = () => {
    // 新增log
    // 診所列表上的LOG的延伸modal
    // let nowToday = nowTodayChange();
    // dispatch(setToday(nowToday));
    // dispatch(setClinicID(item.id));
    // let token = "撈cookies 的token";
    // dispatch(onSalesChange(token));
    // dispatch(resetState());

    // TODO  POST API LOG (new)
    setShowAddLogModal(!showAddLogModal);
  };

  const showAddLogModalHandler = () => {
    setShowAddLogModal(true);
  };

  const closeAddLogModalHandler = () => {
    setShowAddLogModal(false);
  };

  const showLogListModalHandler = () => {
    setShowLogListModal(true);
  };

  const closeLogListModalHandler = () => {
    setShowLogListModal(false);
  };

  const refreshMoadlHandler = () => {
    setShowAddLogModal(false);
    setRefreshLog(true);
  };

  // this will be trigger when show log modal
  useEffect(() => {
    // this is important.
    if (showLogListModal || refreshLog) {
      // fetch log api
      const token = appSlice.userToken;
      apiLogList(
        token,
        page,
        item.id,
        "",
        (err) => {},
        (list, total, totalPage) => {
          // console.log(list)
          setListData(list);
          setRefreshLog(false);
        }
      );
    }
  }, [showLogListModal, refreshLog]);
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
            onClick={showLogListModalHandler}
            className="btn-sm w-100 text-light"
            variant="success"
          >
            查看紀錄
          </Button>{" "}
        </td>
        <td className="buttonIcon table-more">
          <button
            onClick={moreDetailHandler}
            className="btn w-100 btn-sm btn-dark"
          >
            查看更多
          </button>
        </td>
      </tr>
      {/* log列表 */}
      <Modal
        className="radio-custom"
        show={showLogListModal}
        onHide={closeLogListModalHandler}
        centered
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header className="bg-secondary text-white" closeButton>
          <Modal.Title>拜訪紀錄 - {item.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {listData.map((item) => (
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
            onClick={showAddLogModalHandler}
          >
            新增紀錄
          </Button>
          <Button variant="secondary" onClick={closeLogListModalHandler}>
            取消
          </Button>
        </Modal.Footer>
      </Modal>
      {/* 新增log */}
      <ModalAddLog
        clinic_id={item.id}
        action={"add"}
        showMoadl={showAddLogModal}
        onClose={closeAddLogModalHandler}
        onRefresh={refreshMoadlHandler}
      />
    </Fragment>
  );

  // list listItem
};
export default ClinicListItem;
