import { createStore } from 'redux';
import { Reducer, initialState } from './reducer';
import { configure } from '@testing-library/react';

export const ConfigureStore = () => {
    const store = createStore(
        Reducer,
        initialState
    );

    return store;
}