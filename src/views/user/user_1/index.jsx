import './index.less';
import Search from '@/components/Search';
import MyTable from '@/components/Table';
import BtnGroup from '@/components/BtnGroup';
import React, { useEffect, useState, useRef } from 'react';
import { DownloadOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space } from 'antd';
export default (props) => {
  // 初始化ref
  const inputRef = useRef(null);
  // 初始化form
  const [form] = Form.useForm();
  // 初始化查询表单
  const formData = {
    username: '',
    password: '',
  }
  // 初始化列表
  let [data, setData] = useState([
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York Park',
    },
    {
      key: '2',
      name: 'John Brown',
      age: 32,
      address: 'New York Park',
    },
    {
      key: '3',
      name: 'John Brown',
      age: 32,
      address: 'New York Park',
    },
    {
      key: '4',
      name: 'John Brown',
      age: 32,
      address: 'New York Park',
    },
    {
      key: '5',
      name: 'John Brown',
      age: 32,
      address: 'New York Park',
    },
    {
      key: '6',
      name: 'John Brown',
      age: 32,
      address: 'New York Park',
    },
    {
      key: '7',
      name: 'John Brown',
      age: 32,
      address: 'New York Park',
    },
    {
      key: '8',
      name: 'John Brown',
      age: 32,
      address: 'New York Park',
    },
    {
      key: '9',
      name: 'John Brown',
      age: 32,
      address: 'New York Park',
    },
    {
      key: '10',
      name: 'John Brown',
      age: 32,
      address: 'New York Park',
    },
  ])
  // 设置列表数据
  const setDataList = (list) => {
    setData(list)
  }
  // 请求字段form
  const requestForm = { request: true, url: 'http://localhost:8080', setDataList, formData }
  // 搜索
  const onFinish = () => {
    inputRef.current.getList(requestForm.url, form.getFieldValue())
  };
  // 刷新
  const OnRefresh = () => {
    form.resetFields()
    onFinish()
  }
  // 列表
  const columns = [
    {
      title: '姓名',
      width: 100,
      dataIndex: 'name',
    },
    {
      title: '年龄',
      width: 100,
      dataIndex: 'age',
    },
    {
      title: '操作',
      width: 100,
      dataIndex: 'address',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => getCheckbox()}>获取当前选中的数据</a>
          <a onClick={() => setCheckbox()}>设置选中的数据</a>
        </Space>
      ),
    },
  ]
  // 选中
  const getCheckbox = () => {
    console.log(inputRef.current.getSelect())
  }
  // 删除
  const deleteCheckbox = () => {
    setData([])
    inputRef.current.setSelect([], 'key')
  }
  // 添加
  const addCheckbox = () => {
    setData([...data, {
      key: '11',
      name: 'John Brown',
      age: 32,
      address: 'New York Park',
    }])
  }
  // 手动选中
  const setCheckbox = () => {
    inputRef.current.setSelect([data[0]], 'key')
  }
  return <div className="user_1_container">
    <Search OnRefresh={OnRefresh} onSearch={onFinish}>
      <Form initialValues={formData} labelAlign='right' form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
        <Form.Item
          name="username"
          label='用户名'
        >
          <Input placeholder="请输入用户名" />
        </Form.Item>
        <Form.Item
          name="password"
          label="密码"
        >
          <Input
            placeholder="请输入密码"
          />
        </Form.Item>
      </Form>
    </Search>
    <BtnGroup>
      <Button onClick={() => getCheckbox()} type="primary" icon={<DownloadOutlined />} size='middle'>
        get All selected
      </Button>
      <Button onClick={() => deleteCheckbox()} danger icon={<DownloadOutlined />} size='middle'>
        delete All Selected
      </Button>
      <Button onClick={() => addCheckbox()} type='dashed' icon={<DownloadOutlined />} size='middle'>
        Add Data
      </Button>
    </BtnGroup>
    <div className="table_warp">
      <MyTable ref={inputRef} requestForm={requestForm} columns={columns} data={data}></MyTable>
    </div>
  </div>
}