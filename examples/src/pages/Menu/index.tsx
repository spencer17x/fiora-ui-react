import React  from 'react';
import CodeShow from '../../components/CodeCard';
import {
  Menu, MenuItem, SubMenu
} from '../../../../lib';

const MenuDemo = () => {
  return (
    <div>
      <CodeShow
        title="基本用法"
        style={{ marginBottom: 20 }}
      >
        <Menu
          mode='horizontal'
        >
          <MenuItem key="mail">
            Navigation One
          </MenuItem>
          <MenuItem key="app" disabled>
            Navigation Two
          </MenuItem>
          <SubMenu
            key="SubMenu"
            title="Navigation Three - Submenu"
          >
            <SubMenu title="Item 1">
              <MenuItem key="setting:1">Option 1</MenuItem>
              <MenuItem key="setting:2">Option 2</MenuItem>
            </SubMenu>
            <SubMenu title="Item 2">
              <MenuItem key="setting:3">Option 3</MenuItem>
              <MenuItem key="setting:4">Option 4</MenuItem>
            </SubMenu>
          </SubMenu>
          <MenuItem key="alipay">
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
              Navigation Four - Link
            </a>
          </MenuItem>
        </Menu>
      </CodeShow>
    </div>
  );
};
export default MenuDemo;
