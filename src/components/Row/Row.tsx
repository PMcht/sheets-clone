import React, { FunctionComponent, ReactNode } from "react";

export type RowProps<P = unknown> = P & { children?: ReactNode | undefined };

const Row: FunctionComponent<RowProps> = (props) => {
  return <tr>{props.children}</tr>;
};

export default Row;
