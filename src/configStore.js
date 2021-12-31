import { configureStore } from "@reduxjs/toolkit"
import { applyMiddleware } from "redux"
import logger from "redux-logger"
import { todosSlice } from "./modules/todos"

const middleware = [logger]


const store = configureStore({reducer : todosSlice.reducer}, applyMiddleware(...middleware))
export default store