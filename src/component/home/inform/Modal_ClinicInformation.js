import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputGroup, Form } from "react-bootstrap";
// call_number_way: "線上叫號";
// care_group: "";
// city: "台北市";
// clinic_status: "可電訪";
// district: "大安區";
// experience: "";
// his: "耀聖";
// id: "c1";
// isDecided: false;
// isUse_video: false;
// isVisit_datetime: "15:00~18:00";
// join_group: "慢性病$BC肝$慢性腎臟病$ABCD其他資訊";
// name: "cxxx診所";
// people: 3;
// phone: "0921231434";
// road: "瑞光路4段18號5-5";
const optionTrim = (option) => {
  let newOption = option.trim();
  return newOption;
};
const ClinicInformation = (props) => {
  let { item, care_networkArr } = props;
  console.log(item, "item", "ClinicInformation", care_networkArr);
  let {
    call_number_way,
    care_group,
    city,
    district,
    experience,
    his,
    id,
    isDecided,
    isUse_video,
    isVisit_datetime,
    care_netWork,
    name,
    people,
    phone,
    road,
  } = item;

  // ClinicInformation13
  let radioInput_dateTime = false;
  if (isVisit_datetime) {
    radioInput_dateTime = true;
  } else {
    radioInput_dateTime = false;
  }
  let radioInput_careNetwork = false;
  if (care_netWork) {
    radioInput_careNetwork = true;
  } else {
    radioInput_careNetwork = false;
  }
  const [visitRadio, setVisitRadio] = useState(false);
  const [careNetworkRadio, setCareNetworkRadio] = useState(false);
  const [options, setOptions] = useState([
    "糖尿病",
    "慢性腎臟病",
    "氣喘",
    "BC肝",
    "慢性阻塞性肺病",
  ]);
  let arr = ["慢性病", "BC肝", "慢性腎臟病", "ABCD其他資訊"];
  const unselectedOptions = arr.filter((item) =>! options.includes(item));
  console.log(unselectedOptions, "unselectedOptionsunselectedOptionsv");
  const visitRadioHandler = (e) => {
    const value = e.target.value === "true";
    setVisitRadio(value);
  };
  const careNetworkRadioHandler = (e) => {
    const value = e.target.value === "true";
    setCareNetworkRadio(value);
  };

  const addOption = () => {
    const newOption = prompt("Please enter the new option", "");

    let formal_option = optionTrim(newOption);
    if (!formal_option) {
      alert("內容不可為空白");
      return;
    }
    let isSameone = options.includes(formal_option);
    // console.log(isNewone,"isNEWONE")
    if (isSameone) {
      alert("內容重複");
      return;
    }
    setOptions([...options, formal_option]);
  };
  return (
    <Fragment>
      <div className="basicInform">
        <section className=" pb-2 title">
          <div className="w-25 ">
            <label htmlFor="clinicName" className="form-label">
              診所名稱:
            </label>
            <input
              type="text"
              className="form-control"
              id="clinicName"
              placeholder="怡和診所"
              value={name}
            />
          </div>
          <div className="w-25">
            <label htmlFor="clinicCode" className="form-label">
              機構代碼:
            </label>
            <input
              type="text"
              className="form-control"
              id="clinicCode"
              placeholder="3501183547"
              value={id}
            />
          </div>
          <div className="w-25 ">
            <label htmlFor="clinicTelephone" className="form-label">
              電話:
            </label>
            <input
              type="tel"
              className="form-control"
              id="clinicTelephone"
              placeholder="02-2362-5100"
              value={phone}
            />
          </div>
        </section>
        <section className=" pb-3 border-bottom inform-address">
          <div className="w-25 d-flex">
            <div className="w-100 pe-2">
              <label htmlFor="city" className="form-label">
                城市:
              </label>
              <input
                type="text"
                className="form-control"
                id="city"
                placeholder="台北市"
                value={city}
              />
            </div>
            <div className="w-100 ">
              <label htmlFor="district" className="form-label">
                區域:
              </label>
              <input
                type="text"
                className="form-control"
                id="district"
                placeholder="內湖區"
                value={district}
              />
            </div>
          </div>
          <div className="address ">
            <label htmlFor="address" className="form-label">
              地址:
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="汀州路二段212號"
              value={road}
            />
          </div>
        </section>
        <section className="inform-his pt-2">
          <div className="inform-his-item">
            <div className="w-100  ">
              <label htmlFor="HIS-system" className="form-label">
                HIS系統:
              </label>
              <select
                id="HIS-system"
                className="form-select"
                aria-label="Default select example"
                defaultValue={his}
              >
                <option selected>請選擇</option>
                <option value="展望">展望</option>
                <option value="耀聖">耀聖</option>
                <option value="其他">其他</option>
              </select>
            </div>
            <div className="w-100 ">
              <label htmlFor="callMode" className="form-label">
                叫號方式:
              </label>
              <input
                type="email"
                className="form-control"
                id="callMode"
                placeholder=""
                defaultValue={call_number_way}
              />
            </div>
          </div>
          <div className="inform-his-item">
            <div className="w-100">
              <label htmlFor="otherDoctor" className="form-label">
                其他醫院執業:
              </label>
              <input
                type="text"
                className="form-control"
                id="otherDoctor"
                placeholder="無"
                defaultValue={experience}
              />
            </div>
            <div className="w-100">
              <label htmlFor="doctorNumber" className="form-label">
                醫生人數:
              </label>
              <input
                type="text"
                className="form-control"
                id="doctorNumber"
                placeholder="1"
                defaultValue={people}
              />
            </div>
          </div>
        </section>
        <section className="d-flex  pt-2">
          <div className="w-100 d-flex inform-radio1">
            <div className="w-50 pe-4  ">
              <label className="form-label">有無視訊:</label>
              <div className="d-flex">
                <div className="form-check pe-5 ">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="video"
                    id="videoTrue"
                    checked={isUse_video}
                  />
                  <label
                    className="form-check-label text-dark"
                    htmlFor="videoTrue"
                  >
                    有
                  </label>
                </div>
                <div className="form-check pe-5 ">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="video"
                    id="videoFalse"
                    checked={!isUse_video}
                  />
                  <label className="form-check-label" htmlFor="videoFalse">
                    無
                  </label>
                </div>
              </div>
            </div>
            <div className="  pe-4 ">
              <label className="form-label">醫生能不能做主:</label>
              <div className="d-flex">
                <div className="form-check pe-5">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="mainDoctor"
                    id="mainDoctorTrue"
                    checked={!isDecided}
                  />
                  <label className="form-check-label" htmlFor="mainDoctorTrue">
                    有
                  </label>
                </div>
                <div className="form-check pe-5">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="mainDoctor"
                    id="mainDoctorFalse"
                    checked={!isDecided}
                  />
                  <label className="form-check-label" htmlFor="mainDoctorFalse">
                    無
                  </label>
                </div>
              </div>
            </div>
            <div className="w-100 ">
              <label htmlFor="doctorGroup" className="form-label">
                醫療群:
              </label>
              <input
                type="text"
                className="form-control form-control-sm"
                id="doctorGroup"
                placeholder=""
                defaultValue={care_group}
              />
            </div>
          </div>
        </section>
        <section className="d-flex  pt-2">
          <div className="w-100 d-flex inform-radio1">
            <div className="w-100 pe-4  ">
              <label className="form-label">
                診所狀態: <span className="px-3">已回訪</span>
              </label>
              {/* <div className="d-flex">
                已回訪
              </div> */}
            </div>
          </div>
        </section>
        <section className="pt-2 inform-radio2">
          <div className="w-100 ">
            <label className="form-label">可否預約拜訪醫師時間:</label>
            <div className="d-flex align-items-center flex-wrap overflow-hidden ">
              <div className="form-check py-2 pe-5">
                <input
                  onChange={visitRadioHandler}
                  value="true"
                  className="form-check-input"
                  type="radio"
                  name="visitTime"
                  id="visitTimeTrue"
                  defaultChecked={radioInput_dateTime}
                />
                <label className="form-check-label" htmlFor="visitTimeTrue">
                  可
                </label>
              </div>
              <div className="form-check py-2 pe-5">
                <input
                  onChange={visitRadioHandler}
                  value="false"
                  className="form-check-input"
                  type="radio"
                  name="visitTime"
                  id="visitTimeFalse"
                  defaultChecked={!radioInput_dateTime}
                />
                <label className="form-check-label" htmlFor="visitTimeFalse">
                  否
                </label>
              </div>
              {isVisit_datetime ? (
                <div className=" input-group-sm ">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="時間"
                    value={isVisit_datetime}
                  />
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </section>
        <section className="pt-2  inform-care-network">
          <label className="form-label">有無加入照護網:</label>
          <div className="d-flex align-items-center flex-wrap">
            <div className="form-check py-2  pe-5">
              <input
                onChange={careNetworkRadioHandler}
                value="true"
                className="form-check-input"
                type="radio"
                name="CareNetwork"
                id="CareNetworkTrue"
                defaultChecked={radioInput_careNetwork}
              />
              <label className="form-check-label" htmlFor="CareNetworkTrue">
                有
              </label>
            </div>
            <div className="form-check py-2  pe-5">
              <input
                onChange={careNetworkRadioHandler}
                value="false"
                className="form-check-input"
                type="radio"
                name="CareNetwork"
                id="CareNetworkFalse"
                defaultChecked={!radioInput_careNetwork}
              />
              <label className="form-check-label" htmlFor="CareNetworkFalse">
                無
              </label>
            </div>
            {/* {careNetworkRadio && (<div>dfasdasf</div>)} */}
            {careNetworkRadio && (
              <div className=" d-flex CareNetwork">
                {/* 多選區 */}

                {options.map((option, index) => (
                  <div key={index} className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name={index}
                      id={index}
                      defaultChecked={arr.includes(option)}
                    />
                    <label className="form-check-label" htmlFor={index}>
                      {option}
                      {/* <FontAwesomeIcon
                          className="fs-6 text-danger  ps-2 removeOptionIcon"
                          icon="fa-solid fa-circle-xmark"
                        /> */}
                    </label>
                  </div>
                ))}
                <InputGroup size="sm" className="my-2 w-100">
                  <Form.Control
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder="新增內容..."
                    value={unselectedOptions.join(",")}
                  />
                </InputGroup>
                {/* <button onClick={addOption}>Add option</button> */}
              </div>
            )}
          </div>
        </section>
      </div>
    </Fragment>
  );

  // list listItem
};
export default ClinicInformation;
