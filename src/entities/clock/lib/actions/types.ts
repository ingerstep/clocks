import { Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";

import { AppAction } from "@entities/clock";
import { RootState } from "@entities/clock/config";


export type AppDispatch = Dispatch<Action<string>> & ((thunk: AppThunk) => void);

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    AppAction
>;