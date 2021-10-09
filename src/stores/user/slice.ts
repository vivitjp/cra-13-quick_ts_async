import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

//===================================================================
//   MOCK API: PS B:\@mockserver> json-server --watch ./sample.json
//===================================================================

//const KEY_WORD = 'user'
//const URL = `http://localhost:3000/${KEY_WORD}`;
const URL = `https://vivitjp.github.io/pseudo_rest_02/users/`;


interface Response {
  "id": number,
  "name"?: string,
  "address"?: string,
  "age"?: number,
}

export const getDataByKey = createAsyncThunk<Response>(
  'compo/fetchByKey',
  async () => {
    const response = await axios.get(URL)
    return response.data
  }
)

const sliceA = createSlice({
  name: 'compo',   //Reducer Name: state.compo  -> store={reducer:{compo: importedName}}
  initialState: { objData: {}, loading: 'idle' },  //state.compo.objData
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDataByKey.pending, (state, action) => {
        //console.log('loading'); //OK
        state.loading = 'loading';
      })
      .addCase(getDataByKey.fulfilled, (state, { payload }) => {
        //console.log(payload); //OK
        state.objData = payload;
        state.loading = 'success';
      })
      .addCase(getDataByKey.rejected, (state, action) => {
        state.loading = 'failed';
      })
  },
});

export const selectPosts = (state: any) => state.compo.objData; //name はここに

export default sliceA.reducer;