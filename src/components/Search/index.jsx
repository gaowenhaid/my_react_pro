import './index.less'
import React, { useEffect, useState } from 'react';
import { SearchOutlined, DownOutlined,RedoOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
export default (props) => {
  let [down, setDown] = useState(false)
  const getMore = (list) => {
    return list.length > 8 ? <div onClick={() => setDown(!down)} className="loadMore"><DownOutlined className={down ? 'downs' : ''} style={{ color: '#409eff' }} /></div> : ''
  }
  const formContainer = document.querySelector('.ant-form')
  const condition = document.querySelector('.condition')
  if(formContainer) {
    if(down) {
      const {height} = formContainer.getBoundingClientRect()
      condition.style.height = height + 'px'
    }else {
      condition.style.height = 35 + 'px'
    }
  }
  return <div className='search-container'>
    <div className={down ? 'downs condition' : 'condition'}>
      {props.children}
    </div>
    <div className="tools">
      <Button onClick={() => props.onSearch()} shape="circle" icon={<SearchOutlined />} />
      <Button onClick={() => props.OnRefresh()} shape="circle" icon={<RedoOutlined />} />
    </div>
    {getMore(props.children.props.children)}
  </div>
}