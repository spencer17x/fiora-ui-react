import React, { useState } from 'react';
import CodeShow from '../../components/CodeCard';
import Menu, { MenuProps } from '../../../../lib/components/menu';

const MenuDemo = () => {
  const [data] = useState<MenuProps['data']>([
    {
      title: '标题1', key: '1', children: [
        {
          title: '标题1-1', key: '1-1', children: [
            { title: '标题1-1-1', key: '1-1-1' }
          ]
        },
        { title: '标题1-2', key: '1-2', children: [] },
        { title: '标题1-3', key: '1-3', children: [] }
      ]
    },
    {
      title: '标题2', key: '2', children: [
        { title: '标题2-1', key: '2-1', children: [] },
        { title: '标题2-2', key: '2-2', children: [] },
        { title: '标题2-3', key: '2-3', children: [] }
      ]
    },
    {
      title: '标题3', key: '3', children: [
        { title: '标题3-1', key: '3-1', children: [] },
        { title: '标题3-2', key: '3-2', children: [] },
        { title: '标题3-3', key: '3-3', children: [] }
      ]
    }
  ]);
  return <div>
    <CodeShow
      title='基本用法'
    >
      <Menu data={data}/>
    </CodeShow>
  </div>;
};

export default MenuDemo;