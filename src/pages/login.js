import React, { Fragment, useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, useHistory } from "react-router-dom";
import { apiLogin } from "../api/api-login";
import { appAction } from "../store/app-slice";

const UserLogin = () => {
  let dispatch = useDispatch()
  let appSlice = useSelector(state => state.appSlice)
  let [err, setErr] = useState('')
  let emailRef = useRef();
  let passwordRef = useRef();
  const navigate = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();
    let email = emailRef.current.value;
    let password = passwordRef.current.value;
    if (!email || !password) {
      setErr("請輸入完整登入資訊")
      return;
    }
    
    apiLogin(email, password, 
      (err) => {
        setErr(err)
      }, (token) => {
        // complete fetch token
        setErr("")
        dispatch(appAction.login(token))
      }
    )
  };

  useEffect(() => {
    if (appSlice.isLogin) {
      navigate.push('/')
    }
  }, [appSlice.isLogin])

  // const [email, setEmail] = useState("");
  return (
    <div className="container h-100 d-flex justify-content-center align-items-center">
      <form className="w-50" onSubmit={submitHandler}>
        <div className="text-center fw-bolder text-secondary h2 mb-5">診所管理系統</div>
        <div className="mb-3">
          <label className="form-label text-dark fw-bold h5">帳號:</label>
          <input
            ref={emailRef}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            該帳號為業務使用
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label text-dark fw-bold h5">密碼:</label>
          <input
            ref={passwordRef}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        {/* <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label">Check me out</label>
        </div> */}
        {err && <div><p style={{color: 'red'}}>{err}</p></div>}
        <button type="submit" className="btn btn-primary w-100">
          登入
        </button>
      </form>
    </div>
  );
};

export default UserLogin;
