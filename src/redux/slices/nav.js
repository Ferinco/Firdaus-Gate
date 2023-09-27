import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNavClicked: false,
};
const NavSlice = createSlice({
  name: "navlinks",
  initialState,
  reducers: {
    ClickNav(state, action) {
      state.isNavClicked = action.payload;
    },
  },
});
export const { ClickNav } = NavSlice.actions;
export default NavSlice.reducer;
