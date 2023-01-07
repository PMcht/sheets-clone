import React, { ComponentType, FunctionComponent, ReactNode, useEffect } from "react";
import { useRecoilState } from "recoil";
import { SheetSizeState } from "../../store/SheetSizeState";
import classes from "./Resiser.module.css";

export type ResiserProps = {};

const Resiser: FunctionComponent<ResiserProps> = (props) => {

    const [sheetSize, setSheetSize] = useRecoilState(SheetSizeState);

    const initDrag = () => {
        document.addEventListener('mousemove', doDrag);
        document.addEventListener('mouseup', stopDrag);
    }

    const doDrag = (event: MouseEvent) => {
        const pointerX = event.pageX;
        const pointerY = event.pageY;

        setSheetSize({
            width: pointerX,
            height: pointerY,
        })
    }

    const stopDrag = () => {
        document.removeEventListener('mousemove', doDrag);
        document.removeEventListener('mouseup', stopDrag);
    }


  return <div onMouseDown={initDrag} className={classes.Resiser}/>

}

export default Resiser
