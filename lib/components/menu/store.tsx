import React, { createContext } from 'react';
import { MenuMode } from './menu';

interface IContext {
  mode: MenuMode;
  activatedKeys?: string[];
}

const MenuContext = createContext<IContext>({
  mode: 'vertical',
  activatedKeys: []
});

export default MenuContext;