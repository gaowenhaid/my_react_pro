import React,{ lazy } from "react";
const User_1 = lazy(()=> import('../../views/user/user_1/index'))
const User_2 = lazy(()=> import('../../views/user/user_2/index'))
const User_3 = lazy(()=> import('../../views/user/user_3/index'))
const User_4 = lazy(()=> import('../../views/user/user_4/index'))
const User_5 = lazy(()=> import('../../views/user/user_5/index'))
const User_6 = lazy(()=> import('../../views/user/user_6/index'))
export default[
  {
    path: '/user',
    meta:{title:'用户管理',auth:'user'},
    children:[
      {
        path: 'user_1',
        element: <User_1></User_1>,
        meta:{title:'用户管理_1',auth:'user_1'}
      },
      {
        path: 'user_2',
        element: <User_2></User_2>,
        meta:{title:'用户管理_2',auth:'user_2'}
      },
      {
        path: 'user_3',
        element: <User_3></User_3>,
        meta:{title:'用户管理_3',auth:'user_3'}
      },
      {
        path: 'user_4',
        element: <User_4></User_4>,
        meta:{title:'用户管理_4',auth:'user_4'}
      },
      {
        path: 'user_5',
        element: <User_5></User_5>,
        meta:{title:'用户管理_5',auth:'user_5'}
      },
      {
        path: 'user_6',
        element: <User_6></User_6>,
        meta:{title:'用户管理_6',auth:'user_6'}
      },
    ]
  }
]