import React,{ lazy } from "react";
const User_1 = lazy(()=> import('../../views/user/user_1/index'))
const User_2 = lazy(()=> import('../../views/user/user_2/index'))
const User_3 = lazy(()=> import('../../views/user/user_3/index'))
const User_4 = lazy(()=> import('../../views/user/user_4/index'))
const User_5 = lazy(()=> import('../../views/user/user_5/index'))
export default[
  {
    path: '/user',
    meta:{title:'用户管理'},
    children:[
      {
        path: 'user_1',
        element: <User_1></User_1>,
        meta:{title:'用户管理_1'}
      },
      {
        path: 'user_2',
        element: <User_2></User_2>,
        meta:{title:'用户管理_2'}
      },
      {
        path: 'user_3',
        element: <User_3></User_3>,
        meta:{title:'用户管理_3'}
      },
      {
        path: 'user_4',
        element: <User_4></User_4>,
        meta:{title:'用户管理_4'}
      },
      {
        path: 'user_5',
        element: <User_5></User_5>,
        meta:{title:'用户管理_5'}
      },
    ]
  }
]