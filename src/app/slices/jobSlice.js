import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    jobs: [],
    isLoading: false,
    error: null,
};

const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {
        setLoading: (state) => {
            state.isLoading = true;
        },

        setError: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

        setJobs: (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.jobs = action.payload;
        },

        createJob: (state, action) => {
            state.jobs.push(action.payload);
        },
    },
});

export default jobSlice.reducer;

export const { setJobs, setError, setLoading, createJob } = jobSlice.actions;
