const express = require('express');
const {v4} = require('uuid')
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const PORT = 3001;

const DB = {
  todos: [
    {
      id: v4(),
      names: 'Alex',
      title: 'Двигатель',
      body: 'Отработал 30 лет',
      category_id: 1,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZM7UqKzjNcstK7_yPj-SGW_81ioZTzZ0mbQ&usqp=CAU',
      available: true
    },
    {
      id: v4(),
      names: 'Ivan',
      title: 'Хлеб',
      body: 'Очень вкусный',
      category_id: 1,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZM7UqKzjNcstK7_yPj-SGW_81ioZTzZ0mbQ&usqp=CAU',
      available: true
    },
    {
      id: v4(),
      names: 'Igor',
      title: 'Работяга',
      body: 'Администратор сайта',
      category_id: 2,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZM7UqKzjNcstK7_yPj-SGW_81ioZTzZ0mbQ&usqp=CAU',
      available: true

    },
    {
      id: v4(),
      names: 'Evgen',
      title: 'Шины',
      body: 'Откатал 2 сезона',
      category_id: 3,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZM7UqKzjNcstK7_yPj-SGW_81ioZTzZ0mbQ&usqp=CAU',
      available: true
    },
    {
      id: v4(),
      names: 'Fedor',
      title: 'Носки',
      body: 'Теплые, удобные',
      category_id: 3,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZM7UqKzjNcstK7_yPj-SGW_81ioZTzZ0mbQ&usqp=CAU',
      available: true
    },
    {
      id: v4(),
      names: 'Alex',
      title: 'Двигатель',
      body: 'Отработал 30 лет',
      category_id: 1,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZM7UqKzjNcstK7_yPj-SGW_81ioZTzZ0mbQ&usqp=CAU',
      available: true
    },
    {
      id: v4(),
      names: 'Ivan',
      title: 'Хлеб',
      body: 'Очень вкусный',
      category_id: 1,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZM7UqKzjNcstK7_yPj-SGW_81ioZTzZ0mbQ&usqp=CAU',
      available: true
    },
    {
      id: v4(),
      names: 'Igor',
      title: 'Работяга',
      body: 'Администратор сайта',
      category_id: 2,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZM7UqKzjNcstK7_yPj-SGW_81ioZTzZ0mbQ&usqp=CAU',
      available: true

    },
    {
      id: v4(),
      names: 'Evgen',
      title: 'Шины',
      body: 'Откатал 2 сезона',
      category_id: 3,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZM7UqKzjNcstK7_yPj-SGW_81ioZTzZ0mbQ&usqp=CAU',
      available: true
    },
    {
      id: v4(),
      names: 'Fedor',
      title: 'Носки',
      body: 'Теплые, удобные',
      category_id: 3,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZM7UqKzjNcstK7_yPj-SGW_81ioZTzZ0mbQ&usqp=CAU',
      available: true
    }

  ]
}

app.use(morgan('dev'))
app.use(cors());
app.use(express.json())



//ДОБАВЛЕНИЕ ПОСТА 
app.post('/posts', async(req,res)=>{
   const newBase = {
      id: v4(),
      title: req.body.title,
      body: req.body.body
   }
   res.json(newBase)

})

//УДАЛЕНИЕ ПОСТА ПРОКИДКА ПО ФАКТУ
app.delete('/post/:id', async(req,res)=>{
   try {
      const newId = {id: req.params.id}
      res.json(newId)
   } catch (error) {
      console.log(error);
   }

})


//ВЫПОЛНЕН СТАТУС
app.post('/done/:id', async(req,res)=>{
   try {
      const newId = {id: req.params.id}
      res.json(newId)
   } catch (error) {
      console.log(error);
   }

})



//ОТДАЧА ВСЕХ ПОСТОВ
app.get('/posts', async(req, res) => {
  res.json(DB.todos)
})



//РЕДАКТИРОВАНИЕ
app.put('/post/:id', (req, res) => {
   // const currentTodo = DB.todos.find((todo) => todo.id === req.params.id)
   const redactorPostId = {
         id: req.params.id
   }
   res.json(redactorPostId)
 })

 

//ЗАБОР КОНКРЕТНОГО ПРОФИЛЯ
app.get('/zabor/profile/:id', async(req,res)=>{

   // console.log('profileId',req.params);
   const profileOne = DB.todos.find((todo)=> todo.id === req.params.id)
   console.log(profileOne);
   res.json(profileOne)

})


app.listen(PORT, () => {
  console.log('Server has been started on PORT ', PORT);
})
