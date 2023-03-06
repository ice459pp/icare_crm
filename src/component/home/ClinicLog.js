import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Search from "../component/home/search";
import { useParams } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
// import ClinicDetail from "../component/home/clinic-list"
import ClinicDetailLog from "./clinicDetail-log";
import ClinicInformation from "./clinicInformation";
let arrayLog = [
  {
    id: "qwdqwqwde",
    name: "sdssaf",
  },
  {
    id: "qwdqwqwdwqeqweqweqe",
    name: "sdssaf",
  },
  {
    id: "qwdqwqwderqwwqqwrqwerqe",
    name: "sdssaf",
  },
  {
    id: "qwdqwqwdqwerqwere",
    name: "sdssaf",
  },
  {
    id: "qwdqwqwdffffffffffe",
    name: "sdssaf",
  },
];
const style = {
  height: `300px`,
};
const ClinicLog = () => {
  // ClinicDetail13
  let params = useParams();

  return (
    <Fragment>
      <div className="w-100 padding-RWD">
        <Tabs
          defaultActiveKey="profile"
          id="fill-tab-example"
          className="mb-3"
          fill
        >
          <Tab eventKey="log" title="Log">
            <div className="py-2 w-100">
              <div className="h5 text-dark fw-bolder">Log:</div>
              {arrayLog.map((item) => (
                <ClinicDetailLog key={item.id}></ClinicDetailLog>
              ))}
            </div>
          </Tab>
          <Tab eventKey="home" title="基本資料">
            <div className="py-2 w-100">
              <div className="h5 text-dark fw-bolder">基本資料:</div>
              <ClinicInformation></ClinicInformation>
            </div>
          </Tab>
          <Tab eventKey="profile" title="編輯">
            <div className="py-2 w-100">
              <div className="h5 text-dark fw-bolder">基本資料:</div>
              <ClinicInformation></ClinicInformation>
            </div>

            <div className="py-2">
              <div className="form-floating">
                <div className="h5 text-dark fw-bolder">新增內容:</div>
                <div className="input-group  px-2 ps-3 py-2 radio-custom inputRadio">
                  <div className="pe-3">狀態類別:</div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input custom-control-input"
                      type="radio"
                      name="radio"
                      id="radio1"
                    />
                    <label
                      className="form-check-label custom-control-label"
                      for="radio1"
                    >
                      初訪
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input custom-control-input"
                      type="radio"
                      name="radio"
                      id="radio2"
                    />
                    <label
                      className="form-check-label custom-control-label"
                      for="radio2"
                    >
                      回訪
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input custom-control-input"
                      type="radio"
                      name="radio"
                      id="radio2"
                    />
                    <label
                      className="form-check-label custom-control-label"
                      for="radio2"
                    >
                      教育訓練
                    </label>
                  </div>
                </div>
                <textarea
                  style={style}
                  className="form-control inputTextarea"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                ></textarea>
              </div>
            </div>
            <div className="d-flex justify-content-center w-100 py-2">
              <button type="button" className="btn btn-primary w-25">
                送出
              </button>
            </div>
          </Tab>
        </Tabs>
      </div>
    </Fragment>
  );

  // list listItem
};
export default ClinicLog;
