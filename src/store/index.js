import { configureStore } from "@reduxjs/toolkit";
import battle from "./battleSlice";

export default configureStore({
  reducer: {
    battle,
  },
});
