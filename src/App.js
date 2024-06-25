import React, { Fragment, useState, useEffect, useRef } from "react";
import Navbar from "./component/navbar";
import Home from "./pages/home";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import ClinicDetail from "./component/home/clinic-detail";
import Approved from "./pages/approved";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserLogin from "./pages/login";
import "./scss/App.scss";
import { useDispatch, useSelector } from "react-redux";
import { useViewport } from "./useViewport";
import Counts from "./pages/counts";
import Service from "./pages/service";
import Qanda from "./pages/qanda";
import QandaEdit from "./component/qanda/qanda-edit"
import { scrollTopAction } from "./store/scrollTop-slice";
import { useLayoutEffect } from "react";
const NavbarWidth = {
  left: `0`,
};
function App() {
  let appSlice = useSelector((state) => state.appSlice);
  let scrollTopSlice = useSelector((state) => state.scrollTopSlice);
  let dispatch = useDispatch();

  let yyy = useRef(null);

  let isLogin_store = appSlice.isLogin;
  const { innerWidth, innerHeight } = useViewport();
  const [menuIsShow, setMenuIsShow] = useState(false);
  const [isLogin, setIsLogin] = useState(isLogin_store);
  useEffect(() => {
    setIsLogin(isLogin_store);
  }, [isLogin_store]);
  const goPath = useHistory();

  let headNavbarRef = useRef() || "";
  const [height, setHeight] = useState(innerHeight);
  const style = {
    height: `calc( ${height}px - 45px )`,
    position: `relative`,
  };
  const menuHandler = () => {
    setMenuIsShow(!menuIsShow);
  };
  const goHome = () => {
    goPath.push(`/`);
  };
  const elementRef = useRef(null);
  const setBodyHeight = () => {
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    const handleResize = () => {
      setBodyHeight();
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);
  useEffect(() => {
    const root = document.querySelector("#root");
    root.style.height = `${height}px`;
  }, [height]);
  return (
    <Fragment>
      {!isLogin ? (
        <div ref={headNavbarRef}></div>
      ) : (
        <div
          ref={headNavbarRef}
          style={{ height: "45px" }}
          className="bg-dark text-white py-2 px-3 d-flex justify-content-between align-items-center header-title"
        >
          <div className="h4 m-0 cursor-pointer " onClick={goHome}>
            診所管理系統
          </div>
          {!menuIsShow && (
            <div onClick={menuHandler} className="m-0 menu">
              <FontAwesomeIcon icon="fas fa-bars" />
            </div>
          )}
          {menuIsShow && (
            <div onClick={menuHandler} className="m-0 menu">
              <FontAwesomeIcon icon="fas fa-times" />
            </div>
          )}
        </div>
      )}
      {!isLogin && (
        <div className="w-100 d-flex heightSetting h-100 " ref={elementRef}>
          <div className="bg-light h-100 w-100 flex-wrap  ">
            <Route exact path="/login" component={UserLogin}></Route>
            <Redirect to="/login" />
          </div>
        </div>
      )}
      {isLogin && (
        <div className="w-100 d-flex " ref={elementRef} style={style}>
          {menuIsShow && (
            <div className="navbar-background" onClick={menuHandler}></div>
          )}

          <div className="h-100 Navbar " style={menuIsShow ? NavbarWidth : {}}>
            <Navbar showMenu={(e) => menuHandler()}></Navbar>
          </div>

          <div className="bg-light h-100 w-100 flex-wrap RouterWidth" ref={yyy}>
            <Switch>
              <Route path="/login" component={UserLogin} />
              <Route exact path="/">
                {" "}
                <Home></Home>{" "}
              </Route>
              <Route path="/clinic/:id" component={ClinicDetail} />
              <Route path="/qaedit/:id" component={QandaEdit} />
              <Route path="/counts" component={Counts} />
              <Route path="/service" component={Service} />
              <Route path="/approved" component={Approved} />
              <Route path="/qanda" component={Qanda} />
              <Route path="/approved/:id" component={Approved} />
            </Switch>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default App;
