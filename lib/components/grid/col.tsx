import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import "./col.scss";

interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  span?: number;
}

const Col = (props: ColProps) => {
  const { children, className, span } = props;
  return (
    <div
      className={classNames(
        "f-col",
        {
          [`f-col-${span}`]: span
        },
        className
      )}
    >
      {children}
    </div>
  );
};

Col.propTypes = {
  span: PropTypes.number
};

Col.defaultProps = {
  span: 24
};

export default Col;
