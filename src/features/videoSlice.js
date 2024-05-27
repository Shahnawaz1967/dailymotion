// src/features/videoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const videoSlice = createSlice({
  name: 'videos',
  initialState: { videos: [] },
  reducers: {
    setVideos: (state, action) => {
      state.videos = action.payload;
    },
  },
});

export const { setVideos } = videoSlice.actions;
export default videoSlice.reducer;
