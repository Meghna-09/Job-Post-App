import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./reducers/postsReducer";

export default configureStore({
    reducer: {
        job_posts: postsReducer,
    }
});