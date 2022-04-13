export const AllPostAction = (posts) => {
   return {
      type: 'ALL_POST',
      payload: posts
   }
}

export const addPostAction = (posts) => {
   return {
      type: 'ADD_POST',
      payload: posts,
   }
}

export const deletePostAction = (id) => {
   return {
      type: 'DELETE_POST',
      payload: id,
   }
}

export const donePostAction = (id) => {
   return {
      type: 'DONE_POST',
      payload: id,
   }
}

export const redactorPostAction = (post) => {
   return {
      type: 'REDACTOR_POST',
      payload: post,
   }
}



