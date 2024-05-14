import './index.less';
import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Row, Col } from 'antd';
const { Meta } = Card;
const ColList = [1, 2, 3].map(i => {
  return <Col span={8}>
    <Card
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
        title="Card title"
        description="This is the description"
      />
    </Card>
  </Col>
})
const RowList = [1, 2].map(i => {
  return <Row key={i} gutter={12}>
    {ColList}
  </Row>
})
export default () => {
  return <div className='user_4'>
    {RowList}
  </div>
}