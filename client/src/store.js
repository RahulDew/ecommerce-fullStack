import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./reducers/user";
import sellerSlice from "./reducers/seller";

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
