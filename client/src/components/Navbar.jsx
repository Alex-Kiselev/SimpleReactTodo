import React from 'react'
import 'antd/dist/antd.css';
import { Breadcrumb } from 'antd';
import { Link, useLocation } from 'react-router-dom';


function Navbar() {
   const location = useLocation()


  return (
   <Breadcrumb>
    <Breadcrumb.Item><Link to='/'>Домой</Link></Breadcrumb.Item>
    <Breadcrumb.Item><Link state={{from: location}} to='/posts'>Все посты</Link></Breadcrumb.Item>
  </Breadcrumb>
  )
}

export default Navbar

