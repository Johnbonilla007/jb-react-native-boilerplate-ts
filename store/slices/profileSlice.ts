import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface profileState {
    user: {
        username: string;
        fullName: string;
        isLoggedUp: boolean
    };
}

const initialState: profileState = {
    user: {
        username: "",
        fullName: "",
        isLoggedUp: false
    },
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.user = action.payload;
        },
        setLogout: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const { setLogin, setLogout } = profileSlice.actions;
export default profileSlice.reducer;
