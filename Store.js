import { configureStore } from '@reduxjs/toolkit';
import {Todo}  from './Todo';

export const store = configureStore({
    reducer: {
        Todo: Todo.reducer,
    },
})