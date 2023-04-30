import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import userReducer from "./user/reducers";
import productsReducer from "./products/reducers";
import categoriesReducer from "./categories/reducers";
import cartReducer from "./cart/reducers";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const middleware = [thunk];

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  product: productsReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [...middleware],
});

export const persistor = persistStore(store);
