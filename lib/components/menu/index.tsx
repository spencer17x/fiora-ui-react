import React, { CSSProperties, useContext, useState } from 'react';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import './index.scss';

interface BaseMenuProps {
  title?: string;
  disabled?: boolean;
  style?: CSSProperties;
  className?: string;
  curKey?: string;
  onClick?: (curKey: string) => void;
}

interface MenuProps extends BaseMenuProps {
  layout?: 'vertical' | 'inline' | 'horizontal';
  selectedKey?: string;
}

interface defaultMenuContext {
  selectedKey?: string;
  onClick?: (curKey?: string) => void;
  layout?: 'vertical' | 'inline' | 'horizontal';
}

const MenuContext = React.createContext<defaultMenuContext>({});

const Menu: React.FC<MenuProps> = (props) => {
  const {
    children, layout, className,
    selectedKey, style, onClick,
  } = props;
  return (
    <div
      style={style}
      className={
        classNames('f-menu', {
          [`f-menu--${layout}`]: layout,
        }, className)
      }
    >
      <MenuContext.Provider
        value={{
          selectedKey,
          onClick,
          layout,
        }}
      >
        {children}
      </MenuContext.Provider>
    </div>
  );
};

Menu.defaultProps = {
  layout: 'horizontal',
};

export const MenuItem: React.FC<BaseMenuProps> = (props) => {
  const { children, disabled, curKey } = props;
  const { onClick, selectedKey } = useContext<defaultMenuContext>(MenuContext);
  return (
    <div
      className={classNames('f-menu-item', {
        'f-menu-item--disabled': disabled,
        active: selectedKey === curKey,
      })}
      onClick={() => {
        if (!disabled) {
          onClick && onClick(curKey);
        }
      }}
    >
      {children}
    </div>
  );
};

export const SubMenu: React.FC<BaseMenuProps> = (props) => {
  const { children, title, curKey } = props;
  const { selectedKey, layout } = useContext<defaultMenuContext>(MenuContext);
  const [subShow, setSubShow] = useState(false);
  return (
    <div className="f-sub-menu">
      <div
        className={classNames('f-sub-menu--title', {
          active: selectedKey === curKey,
        })}
        onClick={() => setSubShow(!subShow)}
      >
        {title}
      </div>
      {
        layout === 'inline' ? (
          <CSSTransition
            in={subShow}
            timeout={600}
            classNames="sub-menu"
            unmountOnExit
            onEnter={(el) => {
              console.log('enter', el);
              const { height } = el.getBoundingClientRect();
              console.log(height)
              el.style.height = '0px';
              el.getBoundingClientRect();
              el.style.height = `${height}px`;
            }}
            onExit={(el) => {
              el.style.height = '0px';
            }}
          >
            <div className="f-sub-menu--content">{children}</div>
          </CSSTransition>
        ) : <div className="f-sub-menu--content">{children}</div>
      }
    </div>
  );
};

export const MenuItemGroup: React.FC<BaseMenuProps> = (props) => {
  const { children, title } = props;
  return (
    <div className="f-menu-item--group">
      <div className="f-menu-item--group-title">{title}</div>
      <div className="f-menu-item--group-content">{children}</div>
    </div>
  );
};

export default Menu;
