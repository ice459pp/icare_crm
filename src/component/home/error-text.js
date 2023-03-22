import {React} from 'react'

const ErrorText = (props) => {
  let {text} = props
  return (
    <p style={{color: 'red'}}>{text}</p>
  )
}

export default ErrorText