import React from 'react';
import CodeShow from '../../components/CodeCard';
import {
  Menu, MenuItem, SubMenu, MenuItemGroup,
} from '../../../../lib';

const MenuDemo = () => (
  <div>
    <CodeShow
      title="基本用法"
    >
      <Menu>
        <MenuItem>
          Navigation One
        </MenuItem>
        <MenuItem disabled>
          Navigation Two
        </MenuItem>
        <SubMenu title="Navigation Three - Submenu">
          <MenuItemGroup title="Item 1">
            <MenuItem key="setting:1">Option 1</MenuItem>
            <MenuItem key="setting:2">Option 2</MenuItem>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <MenuItem key="setting:3">Option 3</MenuItem>
            <MenuItem key="setting:4">Option 4</MenuItem>
          </MenuItemGroup>
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

export default MenuDemo;
