import React, { createContext } from 'react';
import { MenuProps } from './menu';

const MenuContext = createContext<MenuProps>({
  mode: 'vertical'
});

export default MenuContext;