import './index.less'
import React, { useState, forwardRef, useImperativeHandle, useEffect } from 'react';
import { Space, Table, Tag } from 'antd';
const MyTable = forwardRef((props, ref) => {
  let [loading, setLoading] = useState(false)
  const { request, url, setDataList,formData } = props.requestForm
  const getList = (v,form) => {
    setLoading(true)
    setTimeout(() => {
      // props.requestForm.setDataList([])
      console.log(v)
      console.log(form)
      setLoading(false)
    }, 3000)
  }
  if (request) {
    useEffect(() => {
      getList(url,formData)
    }, [])
  }
  let [checkedRowList, setCheckRowList] = useState([])
  let [checkedKeyList, setCheckKeyList] = useState([])
  useImperativeHandle(ref, () => ({
    getSelect: () => checkedRowList,
    setSelect: (list, key) => {
      if (Array.isArray(list)) {
        setCheckRowList(list)
        setCheckKeyList(list.map(item => item[key]))
      }
    },
    getList
  }))
  const onSelectChange = (selectedRowKeys, selectedRows) => {
    setCheckRowList(selectedRows)
    setCheckKeyList(selectedRowKeys)
  }
  return <>
    <Table style={{height: '100% !important;'}} loading={loading} rowSelection={{
      onChange: onSelectChange,
      selectedRowKeys: checkedKeyList
    }} columns={props.columns || []} dataSource={props.data || []} />
  </>
})
export default MyTable