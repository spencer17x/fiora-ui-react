import React from 'react';

interface MenuItemProps {
  disabled?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = props => {
  const { children } = props;
  return <div>
    {children}
  </div>;
};

export default MenuItem;