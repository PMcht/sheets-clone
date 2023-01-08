import React, { FunctionComponent, ReactNode } from 'react'
import Sheet from '../components/Sheet';

export type SheetsContainerProps<P = unknown> = P & { children?: ReactNode | undefined };

const SheetsContainer: FunctionComponent<SheetsContainerProps> = (props) => {
    return (
    <Sheet />
    )
}

export default SheetsContainer;