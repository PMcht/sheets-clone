import React, { ChangeEvent, FunctionComponent, KeyboardEvent, ReactNode, useEffect, useRef, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { CellValueState } from '../memoize/CellValueState';
import { EvaluatedCellValueState } from '../memoize/EvaluatedCellValueState';
import classes from "./styles.module.css"

export const Cell_width = 100;
export const Cell_height = 25;

export type CellProps = {
    cellId: string,
    children?: ReactNode,
}



const Cell: FunctionComponent<CellProps> = (props) => {

    const [CellValue, setCellValue] = useRecoilState<string>(CellValueState(props.cellId));
    const evaluatedCellValueState= useRecoilValue<string>(EvaluatedCellValueState(props.cellId));
    const [isEditMode, setIsEditMode] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);


    //Editable to non-editable and opposite
    const changeLabelToInput = () => {setIsEditMode(true); }
    

    const changeInputToLabel = () => setIsEditMode(false)

    const onClickOutsideInputHandler = (event: MouseEvent) => {
        if((event.target as HTMLElement)?.dataset?.cellId !== props.cellId) {
            changeInputToLabel();
        } 
    }

    const defocusInput = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            setIsEditMode(false);
        }
    }

    const updateCellValueState = (event: ChangeEvent<HTMLInputElement>) => setCellValue(event.target.value)

    //Effect for non-editable when clicked outside cell
    useEffect(() => {
        document.addEventListener('click', onClickOutsideInputHandler);

        return document.addEventListener('click', onClickOutsideInputHandler);
    });

    return isEditMode ? (
        <input className={classes.CellInput} ref={inputRef} data-cell-id={props.cellId} value={CellValue} onChange={updateCellValueState} onKeyDown={defocusInput} />
    ) : (
        <div className={classes.CellLabel} data-cell-id={props.cellId} onClick={changeLabelToInput}>
            {evaluatedCellValueState}
        </div>
    );
};

export default Cell