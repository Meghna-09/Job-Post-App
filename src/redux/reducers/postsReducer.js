import { createSlice } from "@reduxjs/toolkit";

const JobsPostSlice = createSlice({
    name: 'job_posts',
    initialState: {
        allPosts: [],
        checkedFields: [],
        selectedPost: null,
        selectedCheckedField: null,
    },
    reducers: {
        setAllPosts: (state, action) => {
            let temp = [...state.allPosts, action.payload];
            state.allPosts = temp;
        },
        setCheckedFields: (state, action) => {
            let temp = [...state.checkedFields, action.payload];
            state.checkedFields = temp;
        },
        setSelectedPost: (state, action) => {
            state.selectedPost = action.payload;
        },
        setSelectedCheckedField: (state, action) => {
            state.selectedCheckedField = action.payload;
        },
        handleDeletePost: (state, action) => {
            let index = state.allPosts.findIndex(post => post.id == action.payload.id);
            let updatedPosts = state.allPosts.filter((elem, id) => { return id != index})
            let updatedCheckedFields = state.checkedFields.filter((elem, id) => { return id != index});
            state.allPosts = updatedPosts;
            state.checkedFields = updatedCheckedFields;
            state.selectedPost = null;
            state.selectedCheckedField = null;
        },
        handleUpdatePost: (state, action) => {
            let index = state.allPosts.findIndex(post => post.id == action.payload.id);
            let allPostsTemp = [...state.allPosts]
            allPostsTemp[index] = action.payload;
            state.allPosts = allPostsTemp;
        },
        handleUpdateCheckedFields: (state, action) => {
            let index = state.checkedFields.findIndex(fields => fields.id == action.payload.id);
            let checkedFieldsTemp = [...state.checkedFields]
            checkedFieldsTemp[index] = action.payload;
            state.checkedFields = checkedFieldsTemp;
        }
    }
});
export const { setAllPosts, setCheckedFields, setSelectedPost, setSelectedCheckedField, handleDeletePost, handleUpdatePost, handleUpdateCheckedFields } = JobsPostSlice.actions;
export default JobsPostSlice.reducer;