import { createSlice } from '@reduxjs/toolkit'
import router, { syncRouter,constRouter } from '../../router/index'
const getRouter = (list) => {
  const arr = []
  list.forEach(i => {
    const obj = {}
    if (i.children && i.children.length) {
      obj.title = i.meta.title
      obj.children = getRouter(i.children)
    } else {
      obj.title = i.meta.title
    }
    obj.name = i.path
    arr.push(obj)
  })
  return arr
}
const auth = ['system', 'system_1', 'system_2', 'user', 'user_1', 'user_2', 'user_3','user_6']
const getAuthMenu = (allMenu, auth) => {
  const arr = []
  allMenu.forEach(item => {
    if (auth.indexOf(item.meta.auth) > -1) {
      arr.push(item)
      if(item.children && item.children.length) {
        item.children = getAuthMenu(item.children,auth)
      }
    }
  })
  return arr
}
export const menu = createSlice({
  name: 'menu',
  initialState: {
    value: getRouter([...constRouter,...getAuthMenu(syncRouter, auth)]) || []
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
  }
})

export const { increment } = menu.actions

export default menu.reducer
