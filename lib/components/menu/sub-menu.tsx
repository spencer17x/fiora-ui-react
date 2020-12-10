import React from 'react';

interface SubMenuProps {
  title: string;
}

const SubMenu: React.FC<SubMenuProps> = props => {
  const { children } = props;
  return <div>{children}</div>
}

export default SubMenu;