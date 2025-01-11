import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import First from './First'
import Second from './Second'
import Third from './third'
import Header from './Header'
import Layout from './Layout'
import Counter from './Counter'
import Staff from './Staff'
import FetchData from './FetchData'
import Data from './Data'
import Register from './Register'
import Login from './Login'
import VerifyEmail from './VerifyEmail'

const MyRoutes = () => {
  return (
    <>
    <BrowserRouter>
    {/* <Header/> */}
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='/' element={<First/>}/>
            <Route path='/second' element={<Second/>}/>
            <Route path='/t' element={<Third/>}/>

            <Route path='/counter' element={<Counter/>}/>
            <Route path='/staff' element={<Staff/>}/>
            <Route path='/fetchdata' element={<FetchData/>}/>

            <Route path='/data/:id' element={<Data/>}/>

            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element ={<Login/>}/>

            <Route path='/verifyEmail/:token' element = {<VerifyEmail/>}/>
          </Route>
        </Routes>
    </BrowserRouter>

    </>
  )
}

export default MyRoutes