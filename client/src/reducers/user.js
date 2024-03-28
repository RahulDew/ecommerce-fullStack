import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth_type: "", // user
  mode: "light",
  user: null,
  token: null,
  cart: {
    itemsList: [],
    showCart: false,
    totalQuantity: 0,
    allTotalPrice: 0,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    setLogout: (state) => {
      state.token = null;
      state.user = null;
    },
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },

    // reducers for cart
    setShowCart: (state) => {
      state.cart.showCart = state.cart.showCart === false ? true : false;
    },
    addToCart: (state, action) => {
      const newItem = action.payload;

      const isItemExisting = state.cart.itemsList.find(
        (item) => item.id === newItem.id
      );

      if (isItemExisting) {
        isItemExisting.quantity++;
        isItemExisting.totalPrice += newItem.price;
      } else {
        state.cart.itemsList.push({
          id: newItem.id,
          name: newItem.name,
          totalPrice: newItem.price,
          quantity: 1,
          price: newItem.price,
        });
        state.cart.totalQuantity++;
        state.cart.allTotalPrice += newItem.totalPrice;
      }
    },
    removeFromCart: (state, action) => {
      const existingItem = state.itemsList.find(
        (item) => item.id === action.payload
      );
      // you can check the existingItem by below line
      // console.log(JSON.stringify(existingItem));

      if (existingItem.quantity > 1) {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      } else {
        state.itemsList = state.itemsList.filter(
          (item) => item.id !== action.payload
        );
      }
      state.totalQuantity--;
      state.allTotalPrice -= existingItem.price;
    },
  },
});

export const {
  setLogin,
  setLogout,
  setMode,
  setShowCart,
  addToCart,
  removeFromCart,
} = userSlice.actions;

export default userSlice.reducer;
