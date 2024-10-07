import { combineReducers } from 'redux';
import exampleReducer from './slices/exampleSlice';
import profileReducer from './slices/profileSlice';

const rootReducer = combineReducers({
    example: exampleReducer,
    profile: profileReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
