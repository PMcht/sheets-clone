import React, { FunctionComponent, ReactNode } from "react";
import classes from "./styles.module.css"

export type RowProps<P = unknown> = P & { children?: ReactNode | undefined };

const Row: FunctionComponent<RowProps> = (props) => {
  return <tr className={classes.Row}>{props.children}</tr>;
};

export default Row;
