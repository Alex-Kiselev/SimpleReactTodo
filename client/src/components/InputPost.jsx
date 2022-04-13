import React, { useState } from 'react'
import 'antd/dist/antd.css';
import { Input, Button,Divider} from 'antd';
import { useDispatch } from 'react-redux';
import { addPostThunk } from '../redux/thunk/ThunkPosts';


function InputPost() {
   const dispatch = useDispatch() 

   const [input, setInput] = useState({title: '', body: ''})
   
   const handleChange = (e) =>{
      e.preventDefault()
      setInput({...input, [e.target.name]: e.target.value})
      console.log(input);
   }

   const addPost = (e) =>{
      e.preventDefault()
      dispatch(addPostThunk(input))
      setInput({title:'', body:''})
   }
   
  return (
      <Divider>
         <p style={{color: 'white'}}> TODO-LIST</p>
   <Input.Group compact>
   <Input   onChange={handleChange} name='body' value={input?.body} style={{ width: '300px' }} placeholder="Название" />
   <Input  onChange={handleChange} name='title' value={input?.title} style={{ width: '300px' }} placeholder="Описание" />
   <br />
   <Button onClick={addPost} type="primary">Добавить</Button>
   </Input.Group>
     
      </Divider>
  )
}

export default InputPost
