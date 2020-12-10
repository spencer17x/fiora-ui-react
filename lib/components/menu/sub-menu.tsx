import React, { useContext } from 'react';
import MenuContext from './store';
import classNames from 'classnames';

interface SubMenuProps {
  title: string;
}

const prefixCls = 'f-sub-menu';

const SubMenu: React.FC<SubMenuProps> = props => {
  const { children } = props;
  const { mode } = useContext(MenuContext);
  return <div className={classNames(prefixCls, `${prefixCls}-${mode}`)}>{children}</div>
}

export default SubMenu;