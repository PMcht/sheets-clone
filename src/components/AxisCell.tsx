import React, { FunctionComponent, ReactNode } from "react";
import classes from "./styles.module.css"

export type AxisCellProps<P = unknown> = P & { children?: ReactNode | undefined };

const AxisCell: FunctionComponent<AxisCellProps> = (props) => {
  return (
    <th className={classes.AxisCell}>{props.children}</th>
)};

export default AxisCell;
