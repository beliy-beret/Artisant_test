import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getProductList} from '../API';
import {Product} from '../Types';

export const fetchProductList = createAsyncThunk('product/fetchProductList', async () => {
  return await getProductList();
});

type InitState = {
  productList: Product[]
  error: string | undefined
  isLoading: boolean
};

const initialState: InitState = {
  productList: [],
  error: '',
  isLoading: false,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductList.pending, (state) => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(fetchProductList.fulfilled, (state, action) => {
      state.productList = action.payload;
      state.error = '';
      state.isLoading = false;
    });
    builder.addCase(fetchProductList.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = true;
    });
  },
});

export default productSlice.reducer;
