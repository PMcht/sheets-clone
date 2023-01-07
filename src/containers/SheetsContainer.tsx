import React, { ComponentType, FunctionComponent, ReactNode } from 'react'
import Column from '../components/Column/Column';
import Sheet from '../components/Sheet/Sheet';

export type SheetsContainerProps<P = unknown> = P & { children?: ReactNode | undefined };

const SheetsContainer: FunctionComponent<SheetsContainerProps> = (props) => {
    return (
    <Sheet />
    )
}

export default SheetsContainer;