import React from "react";
import classNames from "classnames";
import "./row.scss";

interface RowProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Row(props: RowProps) {
  const { children, className } = props;
  return <div className={classNames("f-row", className)}>{children}</div>;
}
