import React, { FunctionComponent, ReactNode } from 'react'
import { numberToChar } from '../calcs/numberToChar';
import AxisCell from './AxisCell';
import Cell, { Cell_height, Cell_width } from './Cell';
import Column from './Column';
import Row from './Row';
import classes from "./styles.module.css"

export type SheetProps<P = unknown> = P & { children?: ReactNode | undefined };

const Sheet: FunctionComponent<SheetProps> = (props) => {
    const numberofRows = Math.floor(window.innerHeight/Cell_height);
    const numberofColumns = Math.floor(window.innerWidth/Cell_width);

    return (
    <div className={classes.SheetWrapper}>
        <table className={classes.Grid}>
            <tbody className={classes.Grid}>
                <Row>
                    {[...Array(numberofColumns + 1)].map((column, columnIndex) => 
                        columnIndex !== 0 ?<AxisCell>{numberToChar(columnIndex - 1)}</AxisCell> : <AxisCell />
                    )}
                </Row>
                {[...Array(numberofRows)].map((row, rowIndex) => (
                    <Row key={rowIndex}>
                        <AxisCell>{rowIndex}</AxisCell>
                        {[...Array(numberofColumns)].map((column, columnIndex) => (
                            <Column key={columnIndex}>
                                <Cell cellId={`${rowIndex},${columnIndex}`} />
                            </Column>
                        ))}
                    </Row>
            ))}
            </tbody>
        </table>
    </div>
    )
}

export default Sheet