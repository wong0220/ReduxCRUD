import { configureStore, createSlice } from "@reduxjs/toolkit";
import { createStore, applyMiddleware } from "redux";
// import thunk from 'redux-thunk';
import logger from 'redux-logger'

// const ADD_TODO = 'todos/ADD_TODO'
// const DELETE_TODO = 'todos/DELETE_TODO'
// const UPDATE_TODO = 'todos/UPDATE_TODO'

// export const addTodo = text => ({
    
//     type: ADD_TODO,
//     todo:{
//         id:Date.now(),
//         text
//     },
// })

// export const deleteTodo = (id) => (
//  {
//     type: DELETE_TODO,
//     del:{
//         id
//     }
    
// })

// export const updateTodo = (id ,updateText) =>(
//     {
//         type:UPDATE_TODO,
//         id,
//         updateText

// })

// const initialState = []

// export function todos(state=initialState, action){
//     switch(action.type){
//         case ADD_TODO:
//             return [action.todo, ...state]
//         case DELETE_TODO:
//             return state.filter(el => el.id !== parseInt(action.del.id))
//         case UPDATE_TODO:
//             return state.map(el => el.id === action.id ? {id : el.id , text: action.updateText }: el )
//         default:
//             return state
//     }
// }

// const rootReducer = combineReducers({todos})

export const todosSlice = createSlice({
    name:'todosReducer',
    initialState:[],
    reducers: {
        add : (state,action) => {
            state.push({id: Date.now() , text:action.payload})
        }
,
        remove : (state,action) =>  state.filter(el => el.id !== parseInt(action.payload))  // filter의 경우 mutate가 아닌 새로운 배열을 리턴해주기 때문에 {return }이 생략된 채로 써줘야 함 or {return } 붙여줘도 됨
        
,
        renew : (state,action) => state.map(el => el.id === action.payload.update ? {id : el.id , text: action.payload.updateText }: el )
        // renew : (state,action) => state.map(el => console.log(action) )
        

        
    }


})



export const {add , remove, renew} = todosSlice.actions
