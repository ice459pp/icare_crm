import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Search from "../component/home/search";
import { useParams } from "react-router-dom";
import { Button, Modal, Form } from "react-bootstrap";

// import ClinicDetailLog from "../component/home/clinic-list"
// const style = {
//     height: `300px`
// }
const ClinicDetailLog = () => {
  let params = useParams();
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <section className="bg-white text-dark logCard">
      <div className="logCard_title">
        <div>阿民</div>
        <div className="logCard_title_dateStatus_PC">
          <div className="date">2023/03/06 9:30</div>
          <button className="btn btn-success text-white status">
            教育訓練
          </button>
        </div>
        <div className="logCard_title_dateStatus_PD">
          <button className="btn btn-success text-white status">
            教育訓練
          </button>
        </div>
      </div>
      <div className="date_PD">2023/03/06 9:30</div>
      <div className="logCard_content">
        經過與醫師討論後，決定先初次使用看看叫號功能，後續再與我們聯絡。
      </div>
      <div className="logCard_footer">2023/03/06 09:30 新增</div>
    </section>
  );
};
export default ClinicDetailLog;
