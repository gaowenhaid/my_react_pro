import './index.less'
import { DownOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, Space } from 'antd';
export default () => {
  const items = [
    {
      label: <a href="https://www.antgroup.com">个人中心</a>,
      key: '0',
    },
    {
      label: <a href="https://www.aliyun.com">我的</a>,
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
  ];
  return <div className="header">
    <div className="left">
      <img src="src\assets\logoko.png" alt="" />
    </div>
    <div className="right">
      <Dropdown
        menu={{
          items,
        }}
        trigger={['click']}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
          <Avatar size={44} src="https://img1.baidu.com/it/u=3476907556,2235344241&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=1131" />
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </div>
  </div>
}