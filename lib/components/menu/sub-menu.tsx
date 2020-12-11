import React, { cloneElement, isValidElement, useContext, useEffect, useRef, useState } from 'react';
import MenuContext from './store';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import './sub-menu.scss';

interface SubMenuProps {
  title: string;
  level?: number;
}

const prefixCls = 'f-sub-menu';

const SubMenu: React.FC<SubMenuProps> = props => {
  const { children, title, level = 1 } = props;
  const { mode } = useContext(MenuContext);
  const newLevel = level > 1 && mode === 'horizontal' ? level - 1 : level;
  const [expanded, setExpanded] = useState<boolean>(() => {
    return mode === 'inline';
  });
  const [initialHeight, setInitialHeight] = useState('0px');
  const onExpand = () => {
    setExpanded(!expanded);
  };
  useEffect(() => {
    const height = expanded ? 'auto' : '0px';
    setInitialHeight(height);
  }, []);
  return <div
    className={
      classNames(
        prefixCls,
        `${prefixCls}-${mode}`,
        `${prefixCls}-${mode}--level-${level}`
      )
    }
  >
    <div
      className={classNames(`${prefixCls}-${mode}--title`)}
      style={{ padding: `10px ${newLevel * 10}px` }}
      onClick={onExpand}
    >
      <span>{title}</span>
      <span>{expanded ? '-' : '+'}</span>
    </div>
    <CSSTransition
      in={expanded}
      timeout={500}
      onEnter={el => {
        el.style.height = 'auto';
        const { height } = el.getBoundingClientRect();
        el.style.height = '0px';
        el.getBoundingClientRect();
        el.style.height = `${height}px`;
      }}
      onEntered={el => {
        el.style.height = 'auto';
      }}
      onExit={el => {
        const { height } = el.getBoundingClientRect();
        el.style.height = `${height}px`;
        el.getBoundingClientRect();
        el.style.height = '0px';
      }}
    >
      <div
        style={{ height: initialHeight }}
        className={
          classNames(
            `${prefixCls}-${mode}--children`
          )
        }
      >
        {
          React.Children.map(children, (child, index) => {
            if (isValidElement(child)) {
              return cloneElement(child, {
                key: index,
                level: level + 1
              });
            }
            return child;
          })
        }
      </div>
    </CSSTransition>
  </div>;
};

export default SubMenu;