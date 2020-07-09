import React, { useState } from 'react';
import CodeShow from '../../components/CodeCard';
import { Button, Table } from '../../../../lib';

const DemoTable = () => {
  const [columns] = useState([{
    title: '姓名',
    dataIndex: 'name',
    key: 'name'
  }, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age'
  }, {
    title: '住址',
    dataIndex: 'address',
    key: 'address'
  }, {
    title: '标签',
    dataIndex: 'tags',
    key: 'tags',
    render: (tags: string[]) => {
      return <>
        {
          tags.map((tag, index) => {
            return <span key={index} style={{ marginRight: 10 }}>{tag}</span>;
          })
        }
      </>;
    }
  }, {
    title: '操作',
    key: 'action',
    dataIndex: 'action',
    render: () => {
      return <Button type='primary'>Giao</Button>;
    }
  }]);
  const [data] = useState([{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  }, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser']
  }, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  }]);
  return <div>
    <CodeShow
      title='基本用法'
    >
      <Table
        columns={columns}
        data={data}
      />
    </CodeShow>
  </div>;
};

export default DemoTable;