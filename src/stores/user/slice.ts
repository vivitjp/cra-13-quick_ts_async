//===================================================================
// IMPORTS & Constants
//===================================================================
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

//定数
import { URL } from '../constant'

//Data Source Server URL
const TRG_DATA = "users/"
const DATA_SOURCE_URL = URL.DATA_SOURCE_SERVER + URL.DATA_SOURCE_DIR + TRG_DATA;

//===================================================================
// AsyncThunk
//===================================================================
interface Response {
  "id": string,
  "name"?: string,
  "address"?: string,
  "age"?: string,
  "en": string,
}

export const getDataByKey = createAsyncThunk<Response>(
  'compo/fetchByKey',
  async () => {
    const response = await axios.get(DATA_SOURCE_URL)
    return response.data
  }
)

//===================================================================
// Slice
//===================================================================
const slice = createSlice({
  name: 'compo',   //Reducer Name: state.compo  -> store={reducer:{compo: importedName}}
  initialState: { objData: {}, loading: 'idle' },  //state.compo.objData
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDataByKey.pending, (state, action) => {
        //console.log('loading');
        state.loading = 'loading';
      })
      .addCase(getDataByKey.fulfilled, (state, { payload }) => {
        //console.log('success', payload);
        state.objData = payload;
        state.loading = 'success';
      })
      .addCase(getDataByKey.rejected, (state, action) => {
        //console.log('failed');
        state.loading = 'failed';
      })
  },
});

//===================================================================
// Selector & Reducer
//===================================================================
export const selectPosts = (state: any) => state.compo.objData;

export default slice.reducer;