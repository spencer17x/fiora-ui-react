import React, { ReactElement } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { isNumber } from "../../utils";
import "./row.scss";

interface GutterObject {
  xs: number;
  sm: number;
  md: number;
  lg: number;
}

interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  gutter?: number | GutterObject;
  children: ReactElement | ReactElement[];
}

const Row = (props: RowProps) => {
  const { children, className, gutter = 0, ...restProps } = props;
  /**
   * 拼接class
   * @param prefixClass
   * @param gutter
   */
  const combineGutterClasses = (
    prefixClass: string,
    gutter: RowProps["gutter"]
  ): string => {
    if (isNumber(gutter) || !gutter) return "";
    return Object.keys(gutter)
      .map((gutterKey: keyof GutterObject) => {
        return `${prefixClass}-${gutterKey}-${gutter[gutterKey]}`;
      })
      .join(" ");
  };
  return (
    <div
      className={classNames(
        "f-row",
        {
          [`f-row-gutter-${gutter}`]: isNumber(gutter)
        },
        combineGutterClasses("f-row-gutter", gutter),
        className
      )}
      {...restProps}
    >
      {React.Children.map(children, child => {
        const childClasses = child.props.className;
        return React.cloneElement(child, {
          className: classNames(
            {
              [`f-row--col-gutter-${gutter}`]: isNumber(gutter)
            },
            combineGutterClasses("f-row--col-gutter", gutter),
            childClasses
          )
        });
      })}
    </div>
  );
};

Row.propTypes = {
  gutter: PropTypes.oneOfType([PropTypes.number, PropTypes.object])
};

export default Row;
