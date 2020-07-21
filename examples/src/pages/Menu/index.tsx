import React, { useState } from 'react';
import CodeShow from '../../components/CodeCard';
import {
  Menu, MenuItem, SubMenu, MenuItemGroup,
} from '../../../../lib';

const MenuDemo = () => {
  const [menuKey, setMenuKey] = useState('nav1');
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
      >
        {/* <Menu
       layout="inline"
       style={{ width: '280px', borderRight: '1px solid #ccc' }}
       >
       <SubMenu
       key="sub1"
       title="Navigation One"
       >
       <MenuItemGroup key="g1" title="Item 1">
       <MenuItem key="1">Option 1</MenuItem>
       <MenuItem key="2">Option 2</MenuItem>
       </MenuItemGroup>
       <MenuItemGroup key="g2" title="Item 2">
       <MenuItem key="3">Option 3</MenuItem>
       <MenuItem key="4">Option 4</MenuItem>
       </MenuItemGroup>
       </SubMenu>
       <SubMenu key="sub2" title="Navigation Two">
       <MenuItem key="5">Option 5</MenuItem>
       <MenuItem key="6">Option 6</MenuItem>
       <SubMenu key="sub3" title="Submenu">
       <MenuItem key="7">Option 7</MenuItem>
       <MenuItem key="8">Option 8</MenuItem>
       </SubMenu>
       </SubMenu>
       <SubMenu
       key="sub4"
       title="Navigation Three"
       >
       <MenuItem key="9">Option 9</MenuItem>
       <MenuItem key="10">Option 10</MenuItem>
       <MenuItem key="11">Option 11</MenuItem>
       <MenuItem key="12">Option 12</MenuItem>
       </SubMenu>
       </Menu> */}
      </CodeShow>
    </div>
  );
};
export default MenuDemo;
