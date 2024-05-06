import {createSlice,nanoid} from '@reduxjs/toolkit'



const initialState={
    posts:[]
}

export const postSlice=createSlice({
    name:'post',
    initialState,
    reducers:{
        addPost:(state,action)=>{
            const { username, title, content } = action.payload;
            const post = {
                id: nanoid(),
                username,
                title,
                content,
              };
              console.log("t", action);
              state.posts.push(post);
        },
        deletePost:(state,action)=>{
            state.posts = state.posts.filter((post) => post.id != action.payload);
        }
    }
})

export const {addPost,deletePost}=postSlice.actions;

export default postSlice.reducer