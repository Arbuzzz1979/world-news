import dataReducer from "./dataReducer";
import appReducer from "./appReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers(
  { 
      data: dataReducer,
      app: appReducer
  }
)
