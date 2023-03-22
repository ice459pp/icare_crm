import {React} from 'react'

const InputRadio = (props) => {
  let {id, name, text, isCheck} = props
  return (
    <div className="form-check form-check-inline">
      <input
        className="form-check-input custom-control-input"
        type="radio"
        name={name}
        id={id}
        value={text}
        checked={isCheck}
        onChange={props.onChange}
      />
      <label
        className="form-check-label custom-control-label"
        htmlFor={id}
      >
        {text}
      </label>
    </div>
  );
};

export default InputRadio;
