import React, { Fragment, useState } from "react";
const ClinicDetailLog = (props) => {
  let { item, readonly } = props;
  let isEditFormal = false;
  if (readonly) {
    isEditFormal = false;
  } else {
    if (item.isEdit) {
      isEditFormal = true;
    } else {
      isEditFormal = false;
    }
  }
  return (
    <Fragment>
      <div>
        {/* 可以修改 */}
        {isEditFormal && (
          <section
            data-id={item.id}
            className="bg-white text-dark logCard"
            onClick={() => {
              props.onLogClick(item);
            }}
          >
            <div className="logCard_title">
              <div className="text-primary" data-id={item.visitor_id}>
                {item.visitor_name}
              </div>
              <div className="logCard_title_dateStatus_PC">
                <div className="date">{item.visit_datetime}</div>
                <div className=" status fw-bolder "> {item.visit_category}</div>
                {/* <button className="btn btn-success text-white status fw-bolder  cursor-default">
                  {item.visit_category}
                </button> */}
              </div>
              <div className="logCard_title_dateStatus_PD">
                <div className=" status fw-bolder "> {item.visit_category}</div>
                {/* <button className="btn btn-success text-white status fw-bolder cursor-default">
                  {item.visit_category}
                </button> */}
              </div>
            </div>
            <div className="date_PD">{item.visit_datetime}</div>
            <div className="logCard_content">{item.content}</div>
            <div className="logCard_footer">{item.now_datetime} 新增 </div>
          </section>
        )}
        {/* 不可以修改 modal */}
        {!isEditFormal && (
          <section
            data-id={item.id}
            className={
              "bg-white text-dark logCard cursor-default " +
              (readonly ? "readonly" : "")
            }
          >
            <div className="logCard_title">
              <div data-id={item.visitor_id}>{item.visitor_name}</div>
              <div className="logCard_title_dateStatus_PC">
                <div className="date">{item.visit_datetime}</div>
                <div className=" status fw-bolder "> {item.visit_category}</div>

                {/* <button className="btn btn-success text-white status  cursor-default">
                  {item.visit_category}
                </button> */}
              </div>
              <div className="logCard_title_dateStatus_PD">
              <div className=" status fw-bolder "> {item.visit_category}</div>

                {/* <button className="btn btn-success text-white status cursor-default">
                  {item.visit_category}
                </button> */}
              </div>
            </div>
            <div className="date_PD">{item.visit_datetime}</div>
            <div className="logCard_content">{item.content}</div>
            <div className="logCard_footer">{item.now_datetime} 新增 </div>
          </section>
        )}
      </div>
    </Fragment>
  );
};
export default ClinicDetailLog;
