import { createSlice } from "@reduxjs/toolkit";

export interface BasketState {
  items: { flower: any; count: number }[];
}

const initialState: BasketState = {
  items: [] as any,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item?.flower?.id === action?.payload?.id,
      );
      if (itemIndex === -1) {
        state.items = [...state.items, { flower: action.payload, count: 1 }];
      } else {
        state.items[itemIndex].count += 1;
      }
    },
    removeItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item?.flower?.id === action?.payload?.id,
      );
      console.log(itemIndex);

      if (itemIndex !== -1) {
        state.items[itemIndex].count -= 1;
        if (state.items[itemIndex].count === 0) {
          state.items.splice(itemIndex, 1);
        }
      }
    },
  },
});

export const { addItem, removeItem } = basketSlice.actions;

export default basketSlice.reducer;
