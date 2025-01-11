import React, { useContext } from 'react'
import { ThemeContext } from './App'
// const Person = (props) => {
const Person = ({name ="undefined", address="undefined", phone="undefined"}) => {

    // destructing props
    // let {name, address, phone} = props
    let theme = useContext(ThemeContext)

  return (
    <div style={{
        padding:'25px',
        fontSize:'30px',
        border:'5px solid gray',
        margin: '20px'
    }}>
        Name: {name}
        <br/>Address:{address}
        <br/>Phone: {phone}
        <br />
        <button className={`${theme}BUTTON`}>Contact Now</button>
    </div>
  )
}

export default Person