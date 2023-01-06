import React, { ChangeEvent, ComponentType, FunctionComponent, useEffect, useRef, useState } from 'react';
import { atom, useRecoilState } from 'recoil';
import { CellValueState } from '../../store/CellValueState';


export type CellProps = {
    children: ComponentType | string;
}

const Cell: FunctionComponent<CellProps> = (props) => {

    const [CellValue, setCellValue] = useRecoilState<string>(CellValueState)

    const [isEditMode, setIsEditMode] = useState(false);
    const inputRef = useRef(null);


    //Editable to non-editable and opposite
    const changeLabelToInput = () => setIsEditMode(true);
    const changeInputToLabel = () => setIsEditMode(false)

    const onClickOutsideInputHandler = (event: MouseEvent) => {
        if((event.target as HTMLElement)?.dataset?.cellId !== "2") {
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
        <input ref={inputRef} data-cell-id={"2"} value={CellValue} onChange={updateCellValueState} />
    ) : (
        <div data-cell-id={"2"} onClick={changeLabelToInput}>
            {CellValue}
        </div>
    );
};

export default Cell