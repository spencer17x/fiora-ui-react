import React, { useState } from 'react';
import CodeShow from '../../components/CodeCard';
import { Button, Table, TableProps } from '../../../../lib';

const DemoTable = () => {
  const [columns] = useState<TableProps['columns']>([{
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
    key: 'address',
  }]);

  const [columns2] = useState<TableProps['columns']>([{
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
    key: 'address',
  }, {
    title: '操作',
    dataIndex: 'action',
    key: 'action',
    render(v, row) {
      return <Button type='primary' onClick={() => console.log(row)}>
        Giao
      </Button>;
    }
  }]);

  const [columns3] = useState<TableProps['columns']>([{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    width: 300,
    fixed: 'left'
  }, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    width: 500
  }, {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
    width: 300,
    fixed: 'right'
  }]);

  const [data] = useState([{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  }, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  }, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  }]);
  return <div>
    <CodeShow
      style={{ maxWidth: 960, marginBottom: 20 }}
      title='基本用法'
      code={`
const [columns] = useState<TableProps['columns']>([{
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
  key: 'address',
}]);
const [data] = useState([{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}]);
<Table
  columns={columns}
  data={data}
/>
      `}
    >
      <Table
        columns={columns}
        data={data}
      />
    </CodeShow>

    <CodeShow
      style={{ maxWidth: 960, marginBottom: 20 }}
      title='单元格渲染'
      code={`
const [columns2] = useState<TableProps['columns']>([{
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
  key: 'address',
}, {
  title: '操作',
  dataIndex: 'action',
  key: 'action',
  render(v, row) {
    return <Button type='primary' onClick={() => console.log(row)}>
      Giao
    </Button>;
  }
}]);
const [data] = useState([{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}]);
<Table
  columns={columns}
  data={data2}
/>
      `}
    >
      <Table
        columns={columns2}
        data={data}
      />
    </CodeShow>

    <CodeShow
      style={{ maxWidth: 960 }}
      title='固定列'
      code={`
const [columns3] = useState<TableProps['columns']>([{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
  width: 300,
  fixed: 'left'
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
  width: 500
}, {
  title: '住址',
  dataIndex: 'address',
  key: 'address',
  width: 300,
  fixed: 'right'
}]);
<Table
  columns={columns3}
  data={data}
/>
      `}
    >
      <Table
        columns={columns3}
        data={data}
      />
    </CodeShow>
  </div>;
};

export default DemoTable;
