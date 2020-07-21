import React, { useState } from 'react';
import CodeShow from '../../components/CodeCard';
import {
  Menu, MenuItem, SubMenu, MenuItemGroup
} from '../../../../lib';

const MenuDemo = () => {
  const [menuKey, setMenuKey] = useState('nav1');
  const [menuKey2, setMenuKey2] = useState('sub1');
  const [menuKey3, setMenuKey3] = useState('sub1');
  return (
    <div>
      <CodeShow
        title="基本用法"
        style={{ marginBottom: 20 }}
      >
        <Menu
          selectedKey={menuKey}
          onClick={setMenuKey}
        >
          <MenuItem curKey="nav1">
            Navigation One
          </MenuItem>
          <MenuItem disabled curKey="nav2">
            Navigation Two
          </MenuItem>
          <SubMenu title="Navigation Three - Submenu" curKey="nav3">
            <MenuItemGroup title="Item 1">
              <MenuItem curKey="nav3-option1">Option 1</MenuItem>
              <MenuItem curKey="nav3-option2">Option 2</MenuItem>
            </MenuItemGroup>
            <MenuItemGroup title="Item 2">
              <MenuItem curKey="nav3-option3">Option 3</MenuItem>
              <MenuItem curKey="nav3-option4">Option 4</MenuItem>
            </MenuItemGroup>
          </SubMenu>
          <MenuItem curKey="nav4">
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
              Navigation Four - Link
            </a>
          </MenuItem>
        </Menu>
      </CodeShow>

      <CodeShow
        title="layout"
        style={{ marginBottom: 20 }}
      >
        <Menu
          layout="inline"
          style={{ width: '256px', borderRight: '1px solid #ccc' }}
          selectedKey={menuKey2}
          onClick={setMenuKey2}
        >
          <SubMenu
            curKey="sub1"
            title="Navigation One"
          >
            <MenuItemGroup curKey="g1" title="Item 1">
              <MenuItem curKey="1">Option 1</MenuItem>
              <MenuItem curKey="2">Option 2</MenuItem>
            </MenuItemGroup>
            <MenuItemGroup curKey="g2" title="Item 2">
              <MenuItem curKey="3">Option 3</MenuItem>
              <MenuItem curKey="4">Option 4</MenuItem>
            </MenuItemGroup>
          </SubMenu>
          <SubMenu curKey="sub2" title="Navigation Two">
            <MenuItem curKey="5">Option 5</MenuItem>
            <MenuItem curKey="6">Option 6</MenuItem>
            <SubMenu curKey="sub3" title="Submenu">
              <MenuItem curKey="7">Option 7</MenuItem>
              <MenuItem curKey="8">Option 8</MenuItem>
            </SubMenu>
          </SubMenu>
          <SubMenu
            curKey="sub4"
            title="Navigation Three"
          >
            <MenuItem curKey="9">Option 9</MenuItem>
            <MenuItem curKey="10">Option 10</MenuItem>
            <MenuItem curKey="11">Option 11</MenuItem>
            <MenuItem curKey="12">Option 12</MenuItem>
          </SubMenu>
        </Menu>
      </CodeShow>

      <CodeShow
        title='示例3'
      >
        <Menu
          style={{ width: 256 }}
          layout='inline'
          selectedKey={menuKey3}
          onClick={setMenuKey3}
        >
          <SubMenu
            curKey="sub1"
            title='sub1'
          >
            <MenuItem curKey="1">Option 1</MenuItem>
            <MenuItem curKey="2">Option 2</MenuItem>
            <MenuItem curKey="3">Option 3</MenuItem>
            <MenuItem curKey="4">Option 4</MenuItem>
          </SubMenu>
          <SubMenu curKey="sub2" title="Navigation Two">
            <MenuItem curKey="5">Option 5</MenuItem>
            <MenuItem curKey="6">Option 6</MenuItem>
            <SubMenu curKey="sub3" title="Submenu">
              <MenuItem curKey="7">Option 7</MenuItem>
              <MenuItem curKey="8">Option 8</MenuItem>
            </SubMenu>
          </SubMenu>
          <SubMenu curKey="sub4" title="Navigation Three">
            <MenuItem curKey="9">Option 9</MenuItem>
            <MenuItem curKey="10">Option 10</MenuItem>
            <MenuItem curKey="11">Option 11</MenuItem>
            <MenuItem curKey="12">Option 12</MenuItem>
          </SubMenu>
        </Menu>
      </CodeShow>
    </div>
  );
};
export default MenuDemo;
