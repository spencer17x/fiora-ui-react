import React, { createContext } from 'react';
import { MenuProps } from './menu';

const MenuContext = createContext<MenuProps>({
  mode: 'vertical',
  activatedKeys: []
});

export default MenuContext;