import React, { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import ModalAddLog from "./log/modal-add-log";
import ClinicDetailLog from "./clinic-detail-log";
import { modalAction } from "../../store/modal-slice";
import { useDispatch, useSelector } from "react-redux";
import { apiLogList } from "../../api/api-clinic-log";
import { scrollTopAction } from "../../store/scrollTop-slice";
// import scrollTopSlice from "../../store/scrollTop-slice";
import { useLayoutEffect } from "react";
const phoneFixHandler = (item) => {
  const phoneNumberArray = item.replace(/ /g, "").split("-");
  phoneNumberArray[0] = phoneNumberArray[0].substring(1);
  let phoneObj = {
    areaCode: parseInt(phoneNumberArray[0]),
    tel: parseInt(phoneNumberArray[1]),
  };
  return phoneObj;
};
const ClinicListItem = (props) => {
  let { item } = props;
  const appSlice = useSelector((state) => state.appSlice);
  const scrollTopSlice = useSelector((state) => state.scrollTopSlice);
  const navigate = useHistory();
  let dispatch = useDispatch();
  const moreDetailHandler = () => {
    let scrollTop = document.querySelector(".RouterWidth").scrollTop;
    dispatch(scrollTopAction.scrollControl(true))
    dispatch(scrollTopAction.scrollTopHandler(scrollTop));
    // navigate.push(`/clinic/${item.id}?scroll=${scrollTop}`);
    
    navigate.push(`/clinic/${item.id}`);
  };
  const [actionStatus, setActionStatus] = useState("");
  const [listData, setListData] = useState([]);
  const [showAddLogModal, setShowAddLogModal] = useState(false);
  const [showLogListModal, setShowLogListModal] = useState(false);
  const [refreshLog, setRefreshLog] = useState(false);
  const [page, setPage] = useState(1);
  const phoneObj = phoneFixHandler(item.phone);
  const showAddLogModalHandler = (item, action) => {
    setShowAddLogModal(true);
  };

  const closeAddLogModalHandler = () => {
    setShowAddLogModal(false);
  };
  const showLogListModalHandler = () => {
    dispatch(modalAction.showModal());
    setShowLogListModal(true);
  };

  const closeLogListModalHandler = () => {
    dispatch(modalAction.closeModal());
    setShowLogListModal(false);
  };
  const refreshMoadlHandler = () => {
    setShowAddLogModal(false);
    setRefreshLog(true);
  };
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
          console.log("list",list)
          setListData(list);
          setRefreshLog(false);
        }
      );
    }
  }, [showLogListModal, refreshLog]);

  useLayoutEffect(() => {
    let bigdom=document.querySelector(".RouterWidth")
    if (bigdom && scrollTopSlice.control) {
      bigdom.scrollTo({
        top: scrollTopSlice.scrollTop,
        // behavior: "smooth",
      });
      // dispatch(scrollTopAction.reset());
    }
  }, [listData]);

  return (
    <Fragment>
      <tr className="align-middle">
        <th data-th="診所名(機構代碼):" scope="row">
          <div>{item.name}</div>
          <div>{item.id}</div>
        </th>
        <td className="td-address" data-th="地址:">
          <a
            className="address"
            href={`https://www.google.com/maps/search/?api=1&query=${item.city}/${item.district}/${item.road}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <section>
              <div>
                {item.city}/{item.district}
              </div>
              <div>{item.road}</div>
            </section>
          </a>
        </td>
        <td data-th="電話:">
          <a href={`tel:+886-${phoneObj.areaCode}-${phoneObj.tel}`}>
            {item.phone}
          </a>
        </td>
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
          </Button>
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
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="warning"
            className="text-white addRecord w-100"
            onClick={() => showAddLogModalHandler(null, "add")}
          >
            新增紀錄
          </Button>
          <Button
            variant="secondary"
            className="w-100"
            onClick={closeLogListModalHandler}
          >
            關閉
          </Button>
        </Modal.Footer>
      </Modal>
      {showAddLogModal && (
        <ModalAddLog
          clinic_id={item.id}
          action={"add"}
          log={null}
          showMoadl={showAddLogModal}
          onClose={closeAddLogModalHandler}
          onRefresh={refreshMoadlHandler}
          onActionStatus={(e) => {
            setActionStatus(e);
          }}
        />
      )}
    </Fragment>
  );
};
export default ClinicListItem;
