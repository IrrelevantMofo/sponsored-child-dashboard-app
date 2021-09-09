import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  message: null,
  errorMessage: null,
  requestStatus: 'NONE',
  data:null, 
};

export const { actions: siteActions, reducer: siteReducer } = createSlice({
    name: 'children',
    initialState,
    reducers: {
      fetchChildRequest(state) {
          state.requestStatus = 'REQUESTING';
          state.data = null;
      },
  
      fetchChildSuccess(state, {payload}) {
          state.requestStatus = 'SUCCESS';
          state.data = payload;
      },
  
      fetchChildFailure(state, {payload}) {
          state.requestStatus = 'FAILURE';
          state.errorMessage = payload;
      },
  
      clearChildData(state,) {
          state.data = null;
      },
    },
  });
  
  export default siteReducer;