import React, { ReactElement } from 'react';
import classNames from 'classnames';
import PropTypes, { instanceOf } from 'prop-types';
import { isNumber, isPlainObject, isArray } from '../../utils';
import './row.scss';

export interface GutterObject {
  xs: number;
  sm: number;
  md: number;
  lg: number;
}

export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  gutter?: number | GutterObject | (GutterObject | number)[];
}

/**
 * 拼接class
 * @param prefixClass
 * @param gutter
 */
export const combineGutterClasses = (
  prefixClass: string,
  gutter: RowProps['gutter']
): string => {
  if (isNumber(gutter)) return `${prefixClass}-${gutter}`;
  if (isPlainObject<GutterObject>(gutter)) {
    return Object.keys(gutter)
    .map((gutterKey: keyof GutterObject) => {
      return `${prefixClass}-${gutterKey}-${gutter[gutterKey]}`;
    })
    .join(' ');
  }
  return '';
};

const Row = (props: RowProps) => {
  const { children, className, gutter, ...restProps } = props;
  return (
    <div
      className={classNames(
        'f-row',
        combineGutterClasses('f-row-gutter', gutter),
        isArray(gutter) &&
        combineGutterClasses('f-row-gutter', gutter[0]),
        className
      )}
      {...restProps}
    >
      {
        isArray(children) ? React.Children.map(children, child => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { gutter: gutter });
          }
          return child;
        }) : children
      }
    </div>
  );
};

Row.propTypes = {
  gutter: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      xs: PropTypes.number,
      sm: PropTypes.number,
      md: PropTypes.number,
      lg: PropTypes.number
    }),
    PropTypes.arrayOf(
      PropTypes.oneOfType(
        [
          PropTypes.number,
          PropTypes.shape({
            xs: PropTypes.number,
            sm: PropTypes.number,
            md: PropTypes.number,
            lg: PropTypes.number
          })
        ]
      )
    )
  ])
};

export default Row;
