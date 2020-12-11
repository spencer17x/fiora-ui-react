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
          <MenuItem disabled key="app">
            Navigation Two
          </MenuItem>
          <SubMenu
            key="SubMenu"
            title="Navigation Three - Submenu"
          >
            <SubMenu title="Item 1">
              <MenuItem disabled key="setting:1">Option 1</MenuItem>
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

      <CodeShow
        title="内嵌菜单"
        style={{ marginBottom: 20 }}
      >
        <Menu
          style={{ width: 256 }}
          mode='inline'
          activatedKeys={['2']}
        >
          <SubMenu key="sub1" title="Navigation One">
            <SubMenu key="g1" title="Item 1">
              <MenuItem disabled key="1">Option 1</MenuItem>
              <MenuItem key="2">Option 2</MenuItem>
            </SubMenu>
            <SubMenu key="g2" title="Item 2">
              <MenuItem key="3">Option 3</MenuItem>
              <MenuItem key="4">Option 4</MenuItem>
            </SubMenu>
          </SubMenu>
          <SubMenu key="sub2" title="Navigation Two">
            <MenuItem key="5">Option 5</MenuItem>
            <MenuItem key="6">Option 6</MenuItem>
            <SubMenu key="sub3" title="Submenu">
              <MenuItem key="7">Option 7</MenuItem>
              <MenuItem key="8">Option 8</MenuItem>
            </SubMenu>
          </SubMenu>
          <SubMenu key="sub4" title="Navigation Three">
            <MenuItem key="9">Option 9</MenuItem>
            <MenuItem key="10">Option 10</MenuItem>
            <MenuItem key="11">Option 11</MenuItem>
            <MenuItem key="12">Option 12</MenuItem>
          </SubMenu>
        </Menu>
      </CodeShow>
    </div>
  );
};
export default MenuDemo;
