import React, { FunctionComponent, ReactNode } from "react";
import classes from "./styles.module.css"

export type ColumnProps<P = unknown> = P & { children?: ReactNode | undefined };

const Column: FunctionComponent<ColumnProps> = (props) => {
  return <td className={classes.Column}>{props.children}</td>;
};

export default Column;
