import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import { thunk } from 'redux-thunk';

import { rootReducer } from '../lib/reducers';
import { AppAction } from '../lib/reducers/types';

import { RootState } from '@entities/clock/config';

export const clockStore = createStore<RootState, AppAction, {}, {}>(
    rootReducer,
    applyMiddleware(thunk)
);