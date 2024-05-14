import menuReducer from './modules/menu'
import { configureStore } from "@reduxjs/toolkit"
export default configureStore({
  reducer: {
    menu:menuReducer
  }
})

export { increment } from './modules/menu'
