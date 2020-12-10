import React from 'react';

interface MenuItemGroupProps {
  title: string;
}

const MenuItemGroup: React.FC<MenuItemGroupProps> = props => {
  const { children } = props;
  return <div>
    {children}
  </div>
}

export default MenuItemGroup;