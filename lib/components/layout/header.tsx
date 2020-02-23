import React from "react";
import { BasicLayoutProps } from "./layout";
import classNames from "classnames";

export default function Header(props: BasicLayoutProps) {
  const { children, className, ...restProps } = props;
  return (
    <div {...restProps} className={classNames(className)}>
      {children}
    </div>
  );
}
