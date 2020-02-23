import React from "react";
import { BasicLayoutProps, layoutPrefixCls } from "./layout";
import classNames from "classnames";

export default function Aside(props: BasicLayoutProps) {
  const { children, className, ...restProps } = props;
  return (
    <div
      {...restProps}
      className={classNames(`${layoutPrefixCls}-aside`, className)}
    >
      {children}
    </div>
  );
}
