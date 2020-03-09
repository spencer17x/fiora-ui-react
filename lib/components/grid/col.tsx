import React from "react";
import classNames from "classnames";
import "./col.scss";

interface ColProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Col(props: ColProps) {
  const { children, className } = props;
  return <div className={classNames("f-col", className)}>{children}</div>;
}
