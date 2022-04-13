import React, { useEffect, useState} from 'react'
import 'antd/dist/antd.css';
import { useDispatch, useSelector } from 'react-redux';
import { AllPostThunk, DeleteThunk, DoneThunk} from '../redux/thunk/ThunkPosts';
import InputPost from './InputPost';
import OnePost from './OnePost';
import { Row } from 'antd';



function TakePosts() {
   const [filterState, setFilterState] = useState(true)

   const dispatch = useDispatch()
   const user = useSelector(state => state.post)

   useEffect(() => {
      dispatch(AllPostThunk())
   },  [])
   
      const Deleter = (id) => {
         dispatch(DeleteThunk(id))
       
      }
      const Check = (id) => {
         dispatch(DoneThunk(id))
      }
      
      const category1 = () =>{
         setFilterState(1)
      } 
      const category2 = () =>{
         setFilterState(2)
      }
      const category3 = () =>{
         setFilterState(3)
      }

      const handAll = () =>{
         setFilterState(true)
      }
   

      return (

     <div className='hello'>
         <InputPost/>
         <Row justify='center'>
         <button onClick={category1}>1категория</button>
         <button onClick={category2}>2 категории</button>
         <button onClick={category3}>3 категории</button>
         <button onClick={handAll}>все категории</button>
         </Row>
         <Row  justify='center'>
         {user?.filter(el=> filterState === true? true: el.category_id === filterState  ).map((el)=> <OnePost  key={el.id} elem={el} Deleter={Deleter} DonePost={el.done} 
         Check={Check}
         
         />)}
         </Row>
     </div>
  );
}

export default TakePosts

