import React, { useState } from 'react'
import 'antd/dist/antd.css';
import { Modal, Button,Card, Input } from 'antd';
import { SketchOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { RedactorThunk } from '../redux/thunk/ThunkPosts';
import { Link } from 'react-router-dom'
import './MainPage.css'




function OnePost(props) {
const dispatch = useDispatch() 
const [inputModal, setInputModal] = useState({title:'', body:''})
const [isModalVisible, setIsModalVisible] = useState(false);
const {body,title,id, category_id} = props.elem
const {Deleter,Check,DonePost} = props

   const showModal = (id) => {
     setIsModalVisible(true);
   };

   const handleOk = (id) => {
         const obj = {...inputModal,id}
         console.log(obj);
         dispatch(RedactorThunk(obj))
         setInputModal({title:'', body:''})
         setIsModalVisible(false);
   };

   const handleCancel = () => {
     setIsModalVisible(false);
   };

   const handleChange = (e) =>{
      e.preventDefault()
      setInputModal({...inputModal, [e.target.name]: e.target.value})
   }


  return (
    <div>
      <Card  title="Карточка"  style={{ width: 300, margin: '20px', textAlign:'center' }}>
      <p>{body}</p>
      <p style={{textDecoration: DonePost? 'line-through': 'none'}}>{title}</p>
      <p>Категория для теста {category_id}</p>
      <Button onClick={()=> Deleter(id)} type="primary" danger>Удалить</Button>
      <SketchOutlined onClick={()=>Check(id)} style={{fontSize: '20px', margin: '5px'}} />
      <Link to={`profile/${id}`}><button>Профиль</button></Link>
      <Button  type="primary" onClick={()=> (showModal(id))}>
      Редактировать
      </Button>
      </Card> 

      <Modal title="Редактировать текст"  visible={isModalVisible} onOk={()=>handleOk(id)} onCancel={handleCancel}>
      <Input name='body' value={inputModal?.body} onChange={handleChange} placeholder={body} />
      <Input name='title' value={inputModal?.title} onChange={handleChange} placeholder={title} />
      </Modal>


    </div>
  )
}

export default OnePost

