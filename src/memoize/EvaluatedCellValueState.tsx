import { evaluate } from 'mathjs';
import { selector } from 'recoil';
import { memoize } from '../calcs/memoize';
import { CellValueState } from './CellValueState';

export const EvaluatedCellValueState = (cellId: string) => 
    memoize(`evaluatedCell_${cellId}`, () =>
        selector({
            key: `evaluatedCell_${cellId}`,
            get: ({get}) => {
                const value = get(CellValueState(cellId)) as string;

                if(value.startsWith('=')){
                    try{
                        return evaluate(value.slice(1));
                    }

                    catch{
                        return value;
                    }
                }

                return value
            }
    })
)