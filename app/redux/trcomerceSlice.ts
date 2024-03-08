import { ProductProps } from "@/type";
import { createSlice } from "@reduxjs/toolkit";

interface StoteState {
  productData: ProductProps[];
}

const initialState: StoteState = {
  productData: [],
};

export const trcomerceSlice = createSlice({
  name: "trcomerce",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state?.productData.find((item: ProductProps) => {
        item?._id === action?.payload?._id;
      });
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
    increaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (item: ProductProps) => item._id === action.payload._id
      );
      existingProduct && existingProduct.quantity++;
    },
    descreaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (item: ProductProps) => item?._id === action.payload._id
      );
      if (existingProduct?.quantity === 1) {
        existingProduct.quantity === 1;
      } else {
        existingProduct && existingProduct.quantity--;
      }
    },
    deleteProduct: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item._id !== action.payload
      );
    },
    resetCart: (state) => {
      state.productData = [];
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  descreaseQuantity,
  deleteProduct,
  resetCart,
} = trcomerceSlice.actions;
export default trcomerceSlice.reducer;
