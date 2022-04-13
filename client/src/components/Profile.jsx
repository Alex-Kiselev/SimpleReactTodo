import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import {  useNavigate, useParams } from 'react-router-dom'
import 'antd/dist/antd.css';
import { Avatar, Typography, Divider, Button} from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';
import './MainPage.css'


function Profile() {
   const userProfile = useSelector(state => state.post)
   const [res, setRes] = useState([])
   const [size, setSize] = useState(200)
   const {id} = useParams()
   const Navigate = useNavigate() 

   const allpostfun = () => {
      Navigate('/posts')

   }
   const sizer =() =>{
      if(size < 400) {
         setSize(size + 15)
      }
   }
   
   useEffect(() => {
      let resa = userProfile.find(el=> el.id === id)
      setRes(resa)
   }, [])
   


  return (
     <>
   
   <Divider className='profile'>
   <Avatar  src={res.img?  res.img :'https://oir.mobi/uploads/posts/2021-04/1619654954_51-oir_mobi-p-veselaya-sova-zhivotnie-krasivo-foto-55.jpg'}
    size={size}
      icon={<AntDesignOutlined />}
      />
  <Typography.Title  level={1} style={{ margin: 5 }}>
        {res.names? res.names : 'Какой то Юзер'}
      </Typography.Title>
    <Typography.Title  level={2} style={{ margin: 5 }}>
        {res.title}
      </Typography.Title>
      <Typography.Title  level={4} style={{ margin: 5 }}>
        {res.body}
      </Typography.Title>
      <Button onClick={sizer} type="primary" danger>
      Покорми Меня
    </Button>
    <>
   
    </>
   <button onClick={ allpostfun}>На посты</button>
      </Divider>

   </>
  )
}

export default Profile
