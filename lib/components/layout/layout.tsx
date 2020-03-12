import React, { ReactElement } from "react";
import classNames from "classnames";
import Aside from "./aside";
import "./layout.scss";

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactElement[];
}

export interface BasicLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: string;
}

export const layoutPrefixCls: string = "f-layout";

export default function Layout(props: LayoutProps) {
  const { children, className, ...restProps } = props;
  const hasAside: boolean = children.some(el => {
    return el.type === Aside;
  });
  return (
    <div
      {...restProps}
      className={classNames(layoutPrefixCls, className, {
        [`${layoutPrefixCls}-has-aside`]: hasAside
      })}
    >
      {children}
    </div>
  );
}
