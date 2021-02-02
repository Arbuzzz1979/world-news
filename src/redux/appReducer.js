import {
  INIT_LANGUAGE,
  SHOW_LOADER,
  HIDE_LOADER,
  CHANGE_SECTION,
  
} from "./types";

const initial_state = {
  loading: false,
  language: "us",
  section: "",
};

export default function appReducer(state = initial_state, action) {
  switch (action.type) {

    case INIT_LANGUAGE:
      return { ...state, language: action.payload };
    case CHANGE_SECTION:
      return { ...state, section: action.payload };
    case SHOW_LOADER: {
      return { ...state, loading: true };
    }
    case HIDE_LOADER: {
      return { ...state, loading: false };
    }
    default:
      return state;
  }
}
