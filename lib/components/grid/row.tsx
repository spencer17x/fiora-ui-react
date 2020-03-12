import React, { ReactElement } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import "./row.scss";

interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  gutter?: number;
  children: ReactElement | ReactElement[];
}

const Row = (props: RowProps) => {
  const { children, className, gutter = 0, ...restProps } = props;
  return (
    <div
      className={classNames("f-row", className)}
      style={{ margin: `0 -${gutter / 2}px` }}
      {...restProps}
    >
      {React.Children.map(children, child => {
        const style = child.props.style || {};
        return React.cloneElement(child, {
          style: {
            ...style,
            padding: `0 ${gutter / 2}px`
          }
        });
      })}
    </div>
  );
};

Row.propTypes = {
  gutter: PropTypes.number
};

export default Row;
