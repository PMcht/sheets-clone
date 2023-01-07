import React, { ChangeEvent, ComponentType, FunctionComponent, ReactNode, useEffect, useRef, useState } from 'react';
import { atom, useRecoilState } from 'recoil';
import { CellValueState } from '../../store/CellValueState';
import classes from "./Cell.module.css"

export const Cell_width = 100;
export const Cell_height = 25

export type CellProps = {
    cellId: string,
    children?: ReactNode,
    
}



const Cell: FunctionComponent<CellProps> = (props) => {

    const [CellValue, setCellValue] = useRecoilState<string>(CellValueState(props.cellId));

    const [isEditMode, setIsEditMode] = useState(false);
    const inputRef = useRef(null);


    //Editable to non-editable and opposite
    const changeLabelToInput = () => setIsEditMode(true);
    const changeInputToLabel = () => setIsEditMode(false)

    const onClickOutsideInputHandler = (event: MouseEvent) => {
        if((event.target as HTMLElement)?.dataset?.cellId !== props.cellId) {
            changeInputToLabel();
        } 
    }

    const updateCellValueState = (event: ChangeEvent<HTMLInputElement>) => setCellValue(event.target.value)

    //Effect for non-editable when clicked outside cell
    useEffect(() => {
        document.addEventListener('click', onClickOutsideInputHandler);

        return document.addEventListener('click', onClickOutsideInputHandler);
    }, []);

    return isEditMode ? (
        <input className={classes.CellInput} ref={inputRef} data-cell-id={props.cellId} value={CellValue} onChange={updateCellValueState} />
    ) : (
        <div className={classes.CellLabel} data-cell-id={props.cellId} onClick={changeLabelToInput}>
            <span>{CellValue}</span>
        </div>
    );
};

export default Cell