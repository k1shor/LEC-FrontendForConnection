import React from 'react'

const Second = () => {

  let styleObj = {
    backgroundColor:"pink",
    color: "skyblue"
  }

  return (
    <div>
      <h1 className='myheading' style={{
        backgroundColor:'gray',
        color: 'white'
      }}>
        THis is my second component.
      </h1>
      <h1 style={styleObj}>Example</h1>
    </div>
  )
}

export default Second

// rafce , rfce, rafc, rfc