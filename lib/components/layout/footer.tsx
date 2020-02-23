import React from "react";
import { BasicLayoutProps } from "./layout";
import classNames from "classnames";

export default function Footer(props: BasicLayoutProps) {
  const { children, className, ...restProps } = props;
  return (
    <div {...restProps} className={classNames(className)}>
      {children}
    </div>
  );
}
