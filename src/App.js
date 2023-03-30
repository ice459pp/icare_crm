// import Login from "./pages/login";
import React, { Fragment, useState, useEffect, useRef } from "react";
import Navbar from "./component/navbar";
import Home from "./pages/home";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import ClinicDetail from "./component/home/clinic-detail";
import Approved from "./pages/approved";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import UserLogin from "./pages/login";
import "./scss/App.scss";
import { useSelector } from "react-redux";
// import { is } from "immer/dist/internal";
const NavbarWidth = {
  left: `0`,
  // overflow: "unset"
};
const RouterWidth = {
  width: `80%`,
  overflowY: `scroll`,
};
function App() {
  let appSlice = useSelector((state) => state.appSlice);
  let isLogin_store = appSlice.isLogin;
  const initHeight = `${window.innerHeight}`;
  const [height, setHeight] = useState(initHeight);
  const [menuIsShow, setMenuIsShow] = useState(false);
  const [isLogin, setIsLogin] = useState(isLogin_store);
  useEffect(() => {
    setIsLogin(isLogin_store);
  }, [isLogin_store]);
  const goPath = useHistory(); //設常數接收useHistory()回傳的物件

  let headNavbarRef = useRef() || "";
  console.log(headNavbarRef, "headNavbarRef");
  const style = {
    height: `${height}px`,
    position: `relative`,
  };
  const menuHandler = () => {
    setMenuIsShow(!menuIsShow);
  };
  const goHome = () => {
    goPath.push(`/`);
  };

  useEffect(() => {
    const headNavbarRefDOM = headNavbarRef.current;
    const height = headNavbarRefDOM.clientHeight;
    setHeight(window.innerHeight - height);
    const handleResize = () => {
      setHeight(window.innerHeight - height);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Fragment>
      {!isLogin ? (
        <div ref={headNavbarRef}></div>
      ) : (
        <div
          ref={headNavbarRef}
          className="bg-dark text-white py-2 px-3 d-flex justify-content-between align-items-center"
        >
          <div className="h4 m-0 cursor-pointer" onClick={goHome}>
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
        <div className="w-100 d-flex " style={style}>
          <div className="bg-light h-100 w-100 flex-wrap  RouterWidth">
            <Route
              exact
              path="/login"
              onEnter={() => window.scrollTo(0, 0)}
              component={UserLogin}
            ></Route>
          </div>
        </div>
      )}
      {isLogin && (
        <div className="w-100 d-flex " style={style}>
          {menuIsShow && (
            <div className="navbar-background" onClick={menuHandler}></div>
          )}

          <div className="h-100 Navbar " style={menuIsShow ? NavbarWidth : {}}>
            <Navbar showMenu={(e) => menuHandler()}></Navbar>
          </div>

          <div className="bg-light h-100 w-100 flex-wrap  RouterWidth">
            <Switch>
              <Route
                exact
                path="/"
                onEnter={() => window.scrollTo(0, 0)}
                component={Home}
              ></Route>
              <Route
                path="/clinic/:id"
                onEnter={() => window.scrollTo(0, 0)}
                component={ClinicDetail}
              />
              <Route
                path="/approved"
                onEnter={() => window.scrollTo(0, 0)}
                component={Approved}
              />
              <Route
                path="/approved/:id"
                onEnter={() => window.scrollTo(0, 0)}
                component={Approved}
              />
            </Switch>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default App;
