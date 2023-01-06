import React, { ComponentType, FunctionComponent, useEffect, useRef, useState } from 'react';

export type CellProps = {
    children: ComponentType | string;
}

const Cell: FunctionComponent<CellProps> = (props) => {

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

    //Effect for non-editable when clicked outside cell
    useEffect(() => {
        document.addEventListener('click', onClickOutsideInputHandler);

        return document.addEventListener('click', onClickOutsideInputHandler);
    }, []);

    return isEditMode ? (
        <input ref={inputRef} data-cell-id={"2"} />
    ) : (
        <div data-cell-id={"2"} onClick={changeLabelToInput}>Hello</div>
    );
};

export default Cell