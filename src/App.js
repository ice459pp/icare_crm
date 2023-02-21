// import Login from "./pages/login";
import React, { Fragment, useState, useEffect } from "react";
import Navbar from "./component/navbar";
import Home from "./pages/home";
import { Switch, Route, Redirect } from "react-router-dom";
import ClinicDetail from "./component/home/clinic-detail";
import Approved from "./pages/approved";
import UserLogin from "./pages/login";
const NavbarWidth = {
  width: `20%`,
  overflow: "unset"
}
const RouterWidth = {
  width: `80%`,
  overflowY: `scroll`
}
function App() {
  const initHeight = `${window.innerHeight}`;
  const [height, setHeight] = useState(initHeight);
  const [isLogin, setIsLogin] = useState(true);

  const style = {
    height: `${height}px`
  }

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  if (isLogin) {
    return (
      <Route path="/login" component={UserLogin}> </Route>
    //  <Redirect exact from="/" to="/login" />
    )
  }

  return (
    <div className="w-100 d-flex " style={style}>
      <div className="bg-dark h-100" style={NavbarWidth}>
        <Navbar></Navbar>
      </div>

      <div className="bg-light h-100 d-flex align-items-center flex-wrap flex-column  " style={RouterWidth}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/clinic_Detail/:id" component={ClinicDetail} />
          <Route path="/approved" component={Approved} />
          <Route path="/approved/:id" component={Approved} />
          {/* 核可 */}
          {/* 核可細節 */}
          {/* 搜尋細節 */}

        </Switch>
      </div>
    </div>
  )
}

export default App;
