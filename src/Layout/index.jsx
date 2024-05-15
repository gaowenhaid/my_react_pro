import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Skeleton } from 'antd';
import { DesktopOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Watermark } from 'antd';
const { Content, Sider, Footer } = Layout;
import Header from '../components/Header/index'
import { useSelector } from 'react-redux'
const getMenu = (list) => {
  const arr = []
  list.forEach(item => {
    const obj = {}
    obj.label = item.title
    obj.key = item.name
    obj.icon = <DesktopOutlined></DesktopOutlined>
    if (item.children && item.children.length) {
      obj.children = getMenu(item.children).map(i => {
        // i.key = obj.key + '/' + i.key
        delete i.icon
        return i
      })
    } else {
      obj.children = null
    }
    arr.push(obj);
  })
  return arr
}

const getBreadcrumb = (url, source = []) => {
  const arr = [];
  const routeName = url.split('/').slice(1)
  if (routeName.length === 1) {
    source.forEach(i => {
      const obj = {}
      if ('/' + routeName[0] === i.name) {
        obj.title = i.title
        arr.push(obj)
      }
    })
  } else {
    source.forEach(i => {
      if (i.name === '/' + routeName[0]) {
        const obj = {}
        obj.title = i.title
        arr.push(obj)
        i.children.forEach(c => {
          const obj = {}
          if (c.name === routeName[1]) {
            obj.title = c.title
            arr.push(obj)
          }
        })
      }
    })
  }

  return arr
}


const App = () => {
  const navigaTo = useNavigate();
  const { pathname } = useLocation();
  const temp = pathname.split('/').slice(1)
  const arr = temp.length == 1 ? ['/' + temp[0]] : ['/' + temp[0], temp[1]]
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const changeUrl = ({ item, key, keyPath, domEvent }) => {
    const url = keyPath.length > 1 ? keyPath[1] + '/' + keyPath[0] : keyPath[0]
    navigaTo(url)
  }
  let items = []
  let menu = []
  let braItems = []
  useSelector(state => {
    menu = state.menu.value
    items = getMenu(menu)
    braItems = getBreadcrumb(pathname, menu)
  })
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu defaultOpenKeys={() => arr} onClick={changeUrl} theme="dark" defaultSelectedKeys={() => arr} mode="inline" items={items} />
      </Sider>
      <Layout style={{ overflow: 'auto', height: '100vh' }}>
        <Header
        />
        <Content
          style={{
            margin: '0 16px',
            zIndex: '2',
            height: 'calc(100% - 67px)'
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
            items={braItems}
          >
          </Breadcrumb>
          <Watermark
          style={{width: '100%', height: '100%'}}
            image="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*lkAoRbywo0oAAAAAAAAAAAAADrJ8AQ/original"
          >
            <div
              style={{
                padding: [0, 12],
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
                height: 'calc(100% - 50px)'
              }}
            >
              <React.Suspense fallback={<Skeleton active />}>
                <Outlet></Outlet>
              </React.Suspense>
            </div>
          </Watermark>

        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;