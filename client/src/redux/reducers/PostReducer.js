const PostReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case "ALL_POST":
      return payload;

      case "ADD_POST":
      return [payload,...state];
   

          case "DELETE_POST":
         return state.filter((el)=> el.id !== payload.id);

         case "DONE_POST":
            return state.map(el=> {
               if(el.id === payload.id) {
                  return {
                  ...el, done: !el.done
                  }   
               }
               return el
            });


            case "REDACTOR_POST":
               return [...state].map(el=>{
                  if(el.id === action.payload.id) {
                     el.body = action.payload.body
                     el.title = action.payload.title
                  }
                  return el
               });

           

     

    default:
      return state;
  }
};

export default PostReducer
