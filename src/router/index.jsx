import { Navigate, useRoutes } from "react-router-dom";
import React,{ lazy } from "react";
const Layout = lazy(()=> import('../Layout/index'))
const Home = lazy(()=> import('../views/home/index'))
const About = lazy(()=> import('../views/about/index'))
import System from './routes/system'
import User from './routes/user'
// * 导入所有router
export const syncRouter = [
  ...System,
  ...User
]
const Router = [
  {
    path: '/',
    element: <Navigate to='/home'/>
  },
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/home',
        element: <Home/>,
        meta:{title:'首页'},
      },
      {
        path: '/about',
        element: <About></About>,
        meta:{title:'关于我们'}
      },
      ...syncRouter
    ]
  },
]
export default Router;