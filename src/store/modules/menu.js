import { createSlice } from '@reduxjs/toolkit'
import router, { syncRouter } from '../../router/index'
const allRouter = router[1].children
const getRouter = (list) => {
  const arr = []
  list.forEach(i => {
    const obj = {}
    if(i.children && i.children.length) {
      obj.title = i.meta.title
      obj.children = getRouter(i.children)
    }else {
      obj.title = i.meta.title
    }
    obj.name = i.path
    arr.push(obj)
  })
  return arr
}
export const menu = createSlice({
  name: 'menu',
  initialState: {
    value: getRouter(allRouter) || []
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
  }
})

export const { increment } = menu.actions

export default menu.reducer
