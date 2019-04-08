import { combineReducers } from "redux";

//posts reducer
const posts = (state = [], action) => {
  switch (action.type) {
    case "SET_POSTS":
      return action.posts;
    default:
      return state;
  }
};

//favoritePosts reducer
const favoritePosts = (state = [], action) => {
  switch (action.type) {
    case "SET_FAVORITE_POST":
      return [...state, action.post];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  posts: posts,
  favoritePosts: favoritePosts
});

export default rootReducer;
