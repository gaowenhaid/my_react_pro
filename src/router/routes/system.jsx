import React,{ lazy } from "react";
const System_1 = lazy(()=> import('../../views/system/system_1/index'))
const System_2 = lazy(()=> import('../../views/system/system_2/index'))
const System_3 = lazy(()=> import('../../views/system/system_3/index'))
const System_4 = lazy(()=> import('../../views/system/system_4/index'))
const System_5 = lazy(()=> import('../../views/system/system_5/index'))
export default[
  {
    path: '/system',
    meta:{title:'系统设置',auth:'system'},
    children:[
      {
        path: 'system_1',
        element: <System_1></System_1>,
        meta:{title:'系统设置_1',auth:'system_1'}
      },
      {
        path: 'system_2',
        element: <System_2></System_2>,
        meta:{title:'系统设置_2',auth:'system_2'}
      },
      {
        path: 'system_3',
        element: <System_3></System_3>,
        meta:{title:'系统设置_3',auth:'system_3'}
      },
      {
        path: 'system_4',
        element: <System_4></System_4>,
        meta:{title:'系统设置_4',auth:'system_4'}
      },
      {
        path: 'system_5',
        element: <System_5></System_5>,
        meta:{title:'系统设置_5',auth:'system_5'}
      },
    ]
  }
]