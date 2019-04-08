export const setPostActionCreator = posts => {
  return { type: "SET_POSTS", posts: posts };
};
export const setFavoriteActionCreator = post => {
  return { type: "SET_FAVORITE_POST", post: post };
};
