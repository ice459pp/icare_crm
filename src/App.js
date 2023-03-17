// import Login from "./pages/login";
import React, { Fragment, useState, useEffect, useRef } from "react";
import Navbar from "./component/navbar";
import Home from "./pages/home";
import { Switch, Route, Redirect } from "react-router-dom";
import ClinicDetail from "./component/home/clinic-detail";
import Approved from "./pages/approved";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import UserLogin from "./pages/login";
import "./scss/App.scss";
const NavbarWidth = {
  left: `0`,
  // overflow: "unset"
};
const RouterWidth = {
  width: `80%`,
  overflowY: `scroll`,
};
function App() {
  const initHeight = `${window.innerHeight}`;
  const [height, setHeight] = useState(initHeight);
  const [menuIsShow, setMenuIsShow] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  let headNavbarRef = useRef();
  const style = {
    height: `${height}px`,
    position: `relative`,
  };
  const menuHandler = () => {
    setMenuIsShow(!menuIsShow);
    // console.log(menuIsShow, "menu")
  };

  useEffect(() => {
    const headNavbarRefDOM = headNavbarRef.current;
    const height = headNavbarRefDOM.clientHeight;
    setHeight(window.innerHeight - height);
    const handleResize = () => {
      // console.log(height,"height")
      setHeight(window.innerHeight - height);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Fragment>
      <div
        ref={headNavbarRef}
        className="bg-dark text-white py-2 px-3 d-flex justify-content-between align-items-center"
      >
        <div className="h4 m-0">iCare_CRM</div>
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

      <div className="w-100 d-flex " style={style}>
        {menuIsShow && (
          <div className="navbar-background" onClick={menuHandler}></div>
        )}

        <div className="h-100 Navbar" style={menuIsShow ? NavbarWidth : {}}>
          <Navbar showMenu={(e) => menuHandler()}></Navbar>
        </div>

        <div className="bg-light h-100 d-flex flex-wrap  RouterWidth">
          <Switch>
            <Route exact path="/login" component={UserLogin}></Route>
            <Route exact path="/" component={Home}></Route>
            <Route path="/clinic/:id" component={ClinicDetail} />
            <Route path="/approved" component={Approved} />
            <Route path="/approved/:id" component={Approved} />
            {/* 核可 */}
            {/* 核可細節 */}
            {/* 搜尋細節 */}
          </Switch>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
