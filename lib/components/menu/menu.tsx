import React from 'react';

type MenuMode = 'vertical' | 'horizontal';

interface MenuProps {
  mode: MenuMode;
}

const Menu: React.FC<MenuProps> = props => {
  const { children } = props;
  return <div className='f-menu'>
    {children}
  </div>;
};

export default Menu;