import React, { FunctionComponent, ReactNode } from 'react'
import { useRecoilValue } from 'recoil';
import { SheetSizeState } from '../../store/SheetSizeState';
import Cell, { Cell_height, Cell_width } from '../Cell/Cell';
import Column from '../Column/Column';
import Row from '../Row/Row';
import classes from "./Sheet.module.css"

export type SheetProps<P = unknown> = P & { children?: ReactNode | undefined };

const Sheet: FunctionComponent<SheetProps> = (props) => {
    const sheetSize = useRecoilValue(SheetSizeState);

    const numberofRows = sheetSize.height/Cell_height;
    const numberofColumns = sheetSize.width/Cell_width;

    return (
    <table className={classes.Grid}>
        <tbody className={classes.Grid}>
            {[...Array(numberofRows)].map((row, rowIndex) => (
                <Row key={rowIndex}>
                    {[...Array(numberofColumns)].map((column, columnIndex) => (
                        <Column key={columnIndex}>
                            <Cell cellId={`${rowIndex},${columnIndex}`} />
                        </Column>
                    ))}
                </Row>
           ))}
        </tbody>
    </table>
    )
}

export default Sheet