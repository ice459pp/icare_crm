import React, { Fragment, useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputGroup, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { qaFilterAction } from "../../store/qa-filter-slice";
import { apiQaCategory } from "../../api/api-qa-category";

const QaSearchFilter = (props) => {
  let dispatch = useDispatch();
  const appSlice = useSelector((state) => state.appSlice);
  let qaKeywordRef = useRef(null);
  const [categoryArr, setCategoryArr] = useState([]);
  const [isKeyword, setIsKeyword] = useState(false);
  let qaFilterSlice = useSelector((state) => state.qaFilterSlice);
  let { searchText } = qaFilterSlice;

  useEffect(() => {
    if (searchText) {
      qaKeywordRef.current.value = searchText;
      setIsKeyword(true);
    } else {
      setIsKeyword(false);
    }
  }, [searchText]);

  const handleInputKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      searchTextHandler();
    }
  };

  const searchTextHandler = () => {
    if (!qaKeywordRef.current.value) {
      return;
    }
    let value = qaKeywordRef.current.value || "";
    props.onSearchText(value);
    setIsKeyword(true);
  };

  const resetHandler = () => {
    qaKeywordRef.current.value = "";
    props.onSearchText("");
    dispatch(qaFilterAction.resetState());
    setIsKeyword(false);
  };

  useEffect(() => {
    const token = appSlice.userToken;
    apiQaCategory(
      token,
      (err) => {
        alert(err);
      },
      (data) => {
        setCategoryArr(data)
        console.log(data)
      }
    );
  },[]);

  return (
    <Fragment>
      <form className="p-3 search d-flex  align-items-center justify-content-between">
        <div className=" search-clinicStatus">
          <div className="visitorSelect">
            <label className="">
              <span className="name">分類</span>{" "}
              <span className="bit">:</span>
            </label>
            <Form.Select
              aria-label="Default select example"
            //onChange={(e) => visitorHandler(e)}
            >
              <option value="">無</option>
              {categoryArr.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
            </Form.Select>
          </div>

        </div>

        <InputGroup className="input-group-textSearch" size="">
          <Form.Control
            placeholder="搜尋標題"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            defaultValue={sessionStorage.getItem("searchText")}
            ref={qaKeywordRef}
            onKeyPress={handleInputKeyPress}
          />
          <button
            className="btn btn-secondary"
            type="button"
            id="button-addon2"
            onClick={searchTextHandler}
          >
            <FontAwesomeIcon icon="fas fa-search" />
          </button>
          {isKeyword && (
            <button
              className="btn btn-danger text-white "
              type="button"
              id="button-addon2"
              onClick={resetHandler}
            >
              <FontAwesomeIcon className="" icon="fa-solid fa-xmark" />
            </button>
          )}
        </InputGroup>
      </form>
    </Fragment>
  )
};

export default QaSearchFilter;