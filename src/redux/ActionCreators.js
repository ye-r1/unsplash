import { bindActionCreators } from "redux";
import store from "./store";

import { Action as AppAction } from "./app/redux";
import { Action as PhotosAction } from "./photos/redux";
import { Action as SearchAction } from "./search/redux";
import { Action as TopicsAction } from "./topics/redux";

const { dispatch } = store;

export const appActions = bindActionCreators(AppAction.Creators, dispatch);
export const photosActions = bindActionCreators(
  PhotosAction.Creators,
  dispatch
);
export const searchActions = bindActionCreators(
  SearchAction.Creators,
  dispatch
);
export const topicsActions = bindActionCreators(
  TopicsAction.Creators,
  dispatch
);
