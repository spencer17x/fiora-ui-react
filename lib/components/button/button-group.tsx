import React, { ReactElement } from 'react';
import { SizeType } from './button';
import classNames from 'classnames';
import './button-group.scss';

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: SizeType;
  style?: React.CSSProperties;
  className?: string;
  children: ReactElement[];
}

const prefixCls: string = 'f-btn-group';

const ButtonGroup: React.FC<ButtonGroupProps> = props => {
  const { children, className, ...restProps } = props;
  const classes: string = classNames(prefixCls, className);
  return <div className={classes} {...restProps}>
    {
      React.Children.map(children, (child, index) => {
        const classes = {
          className: classNames({
            'border-left-reset': index > 0,
            'border-right-reset': index < children.length - 1
          })
        };
        return React.cloneElement(child, classes);
      })
    }
  </div>;
};

export default ButtonGroup;
