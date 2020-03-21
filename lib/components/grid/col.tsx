import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { combineGutterClasses, RowProps } from './row';
import { isArray } from '../../utils';
import './col.scss';

interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  span?: number;
  order?: number;
}

const Col = (props: ColProps & RowProps) => {
  const { children, className, span, gutter, order, ...restProps } = props;
  return (
    <div
      {...restProps}
      className={classNames(
        'f-col',
        {
          [`f-col-span-${span}`]: span,
          [`f-col-order-${order}`]: order,
        },
        combineGutterClasses('f-col-gutter', gutter),
        isArray(gutter) &&
        combineGutterClasses('f-col-gutter', gutter[0]),
        isArray(gutter) &&
        combineGutterClasses('f-col-gutter-vertical', gutter[1]),
        className
      )}
    >
      {children}
    </div>
  );
};

Col.propTypes = {
  span: PropTypes.number,
  order: PropTypes.number
};

Col.defaultProps = {
  span: 24
};

export default Col;
