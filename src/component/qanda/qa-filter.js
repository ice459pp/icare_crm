import React, { Fragment, useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputGroup, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { qaFilterAction } from "../../store/qa-filter-slice";
import { apiQaCategory } from "../../api/api-qa-category";

const QaSearchFilter = (props) => {
  let dispatch = useDispatch();
  const appSlice = useSelector((state) => state.appSlice);
  let qaFilterSlice = useSelector((state) => state.qaFilterSlice);
  let qaKeywordRef = useRef(null);
  let { searchText } = qaFilterSlice;
  const [categoryArr, setCategoryArr] = useState([]);
  const [isKeyword, setIsKeyword] = useState(false);

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
      }
    );
  }, []);

  const categoryHandler = (e) => {
    let value = e.target.value;
    props.onCategoryChange(value);
  };

  return (
    <Fragment>
      <form className="p-3 search d-flex align-items-center ">
        <div className="search-qaStatus mb-3 mb-md-0">
          <div className="categoryStatus">
            <label className="me-2">
              <span className="name">分類</span>{" "}
              <span className="bit">:</span>
            </label>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => categoryHandler(e)}
            >
              <option value="">全部</option>
              {categoryArr.map(item => <option key={item.id} value={item.name}>{item.name}</option>)}
            </Form.Select>
          </div>
        <InputGroup className="input-group-textSearch">
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

        </div>
      </form>
    </Fragment>
  )
};

export default QaSearchFilter;