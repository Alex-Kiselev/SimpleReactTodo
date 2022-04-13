import axios from 'axios'
import { addPostAction, AllPostAction, deletePostAction, donePostAction, redactorPostAction } from '../actions/PostAction'

axios.defaults.baseURL= `http://localhost:3001`

//ВСЕ ПОСТЫ
export const AllPostThunk = () => {
   return async(dispatch) => {
   const response = await axios('/posts')
   const data = response.data
   dispatch(AllPostAction(data))
   }
}

//ДОБАВЛЕНИЕ ПОСТА
export const addPostThunk = (posts) => {
   return async(dispatch) => {
   if(posts.title === '' || posts.body === '') {
      return posts
   }
   const response = await axios.post('/posts', posts)
   const data = response.data
   dispatch(addPostAction(data))

   }
} 


//УДАЛЕНИЕ ПОСТА
export const DeleteThunk = (id) => {
   return async(dispatch) => {
   const response = await axios.delete(`/post/${id}`,)
   const data = response.data
   dispatch(deletePostAction(data))
   }
} 


//РЕДАКТИРОВАНИЕ ПОСТА
export const RedactorThunk = (post) => {
   return async(dispatch) => {
      // return post.title === '' || post.body === '' ? post :dispatch(redactorPostAction(post))
      // const response = await axios.put(`/post/${id}`,)
      // const data = response.data
      if(post.title === '' || post.body === '') {
         return post
      }
      return dispatch(redactorPostAction(post))
   }
} 




//ВЫПОЛНЕН СТАТУС
export const DoneThunk = (id) => {
   return async(dispatch) => {
   const response = await axios.post(`/done/${id}`,)
   const data = response.data
   dispatch(donePostAction(data))
   }
} 

