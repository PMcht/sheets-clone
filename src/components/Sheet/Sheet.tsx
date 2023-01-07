import React, { ComponentType, FunctionComponent, ReactNode } from 'react'
import Cell from '../Cell/Cell';
import Column from '../Column/Column';
import Row from '../Row/Row';

export type SheetProps<P = unknown> = P & { children?: ReactNode | undefined };

const Sheet: FunctionComponent<SheetProps> = (props) => {
    return (
    <table>
        <tbody>
            <Row>
                <Column>
                    <Cell />
                </Column>
                <Column>
                    <Cell />
                </Column>
                <Column>
                    <Cell />
                </Column>
            </Row>
        </tbody>
    </table>
    )
}

export default Sheet