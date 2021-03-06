import { combineReducers } from "redux";

import appReducer from "./app/redux";
import photosReducer from "./photos/redux";
import searchReducer from "./search/redux";
import topicsReducer from "./topics/redux";

const reducers = combineReducers({
  app: appReducer,
  photos: photosReducer,
  search: searchReducer,
  topics: topicsReducer
});

export default reducers;
