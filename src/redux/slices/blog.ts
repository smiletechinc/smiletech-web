import { createSlice } from '@reduxjs/toolkit';
import { store } from '../store';

// utils
import axios from '../../utils/axios';
// @types
import { BlogState } from '../../@types/blog';
import { GhostBlogState } from '../../@types/blog';
// ----------------------------------------------------------------------

// const initialState: BlogState = {
//   isLoading: false,
//   error: false,
//   posts: [],
//   post: null,
//   recentPosts: [],
//   hasMore: true,
//   index: 0,
//   step: 11
// };
const initialState: GhostBlogState = {
  isLoading: false,
  error: false,
  posts: [],
  post: null,
  recentPosts: [],
  hasMore: true,
  index: 0,
  step: 11
};

const slice = createSlice(  {
  name: 'blog',
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // GET POSTS
    getPostsSuccess(state, action) {
      state.isLoading = false;
      state.posts = action.payload;
    },

    // GET POST INFINITE
    getPostsInitial(state, action) {
      state.isLoading = false;
      state.posts = action.payload;
    },

    getMorePosts(state) {
      const setIndex = state.index + state.step;
      state.index = setIndex;
    },

    noHasMore(state) {
      state.hasMore = false;
    },

    // GET POST
    getPostSuccess(state, action) {
      state.isLoading = false;
      state.post = action.payload;
    },

    // GET RECENT POST
    getRecentPostsSuccess(state, action) {
      state.isLoading = false;
      state.recentPosts = action.payload;
    }
  }
});

// Reducer
export default slice.reducer;

// Actions
export const { getMorePosts } = slice.actions;

// ----------------------------------------------------------------------
  // export const getStaticProps = async () => {
  //   const { dispatch } = store;
  //   dispatch(slice.actions.startLoading());
  //   try{
  //   const res = await fetch(
  //     "https://abdul-rafay.ghost.io/ghost/api/content/posts/?key=b1ce5ad103d1cb2a8cd0a70212"
  //   ).then((res) => res.json());
    
  //   dispatch(slice.actions.getPostsSuccess(res.data.posts));
  //   } 
  //   catch (error) {
  //     dispatch(slice.actions.hasError(error));
  //   }
   
  //   // setGhostData(ghostposts);
  // };

  // console.log(getStaticProps())

export function getAllPosts() {
  return async () => {
    const { dispatch } = store;
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/api/blog/posts/all');
      dispatch(slice.actions.getPostsSuccess(response.data.posts));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function getPostsInitial(index: number, step: number) {
  return async () => {
    const { dispatch } = store;
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/api/blog/posts', {
        params: { index, step }
      });
      const results = response.data.results.length;
      const { maxLength } = response.data;

      dispatch(slice.actions.getPostsInitial(response.data.results));

      if (results >= maxLength) {
        dispatch(slice.actions.noHasMore());
      }
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------
const { BLOG_URL, CONTENT_API_KEY } = process.env;

// export async function getPost(title: string) {
//   const { dispatch } = store;
//   dispatch(slice.actions.startLoading());
//   try {
//       const res = await fetch(
//         `${BLOG_URL}/ghost/api/content/posts/title/${title}?key=${CONTENT_API_KEY}&fields=title,slug,created_at,updated_at,feature_image,html`
//       ).then((res) => res.json());
//       const posts = res.posts;
//       console.log(posts);
//       return posts[0];
//       dispatch(slice.actions.getPostSuccess(res.data.post));
//   }catch (error) {
//       console.error(error);
//       dispatch(slice.actions.hasError(true));
//     }
      
//     };

export function getPost(title: string) {
  return async () => {
    const { dispatch } = store;
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios(
        `${BLOG_URL}/ghost/api/content/posts/title/${title}?key=${CONTENT_API_KEY}&fields=title,slug,created_at,updated_at,feature_image,html`, {
          params: {title}
        }
      );
      // const response = await axios.get('/api/blog/post', {
      //   params: { title }
      // });
      dispatch(slice.actions.getPostSuccess(response.data.post));
    } catch (error) {
      console.error(error);
      dispatch(slice.actions.hasError(true));
    }
  };
}

// ----------------------------------------------------------------------

export function getRecentPosts(title: string) {
  return async () => {
    const { dispatch } = store;
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/api/blog/posts/recent', {
        params: { title }
      });

      dispatch(slice.actions.getRecentPostsSuccess(response.data.recentPosts));
    } catch (error) {
      console.error(error);
      dispatch(slice.actions.hasError(true));
    }
  };
}
