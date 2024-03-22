import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  projects: [],
};

// Create a slice
const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    addProject: (state, action) => {
      state.projects.push(action.payload);
      console.log(state.projects);
    },
    updateProject: (state, action) => {
      const { id, updatedProject } = action.payload;
      const projectIndex = state.projects.findIndex(project => project.id === id);
      if (projectIndex !== -1) {
        state.projects[projectIndex] = { ...state.projects[projectIndex], ...updatedProject };
      }
    },
    deleteProject: (state, action) => {
      const projectId = action.payload;
      state.projects = state.projects.filter(project => project.id !== projectId);
    },
  },
});

export const { addProject, updateProject, deleteProject } = projectSlice.actions;

// Export only the reducer
export default projectSlice.reducer;
