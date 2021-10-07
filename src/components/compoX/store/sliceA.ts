import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

//===================================================================
//
//   SAMPLE API: PS B:\@mockserver> json-server --watch ./sample.json
//
//===================================================================

interface Response {
  "id": number,
  "name"?: string,
  "address"?: string,
  "age"?: number,
}

export const getDataByKey = createAsyncThunk<Response, { keyword: string }>(
  'compo/fetchByKey',
  async ({ keyword }, { signal }) => {
    const source = axios.CancelToken.source()
    signal.addEventListener('abort', () => { source.cancel() })
    const response = await axios.get(
      `http://localhost:3000/${keyword}`, { cancelToken: source.token, }
    )
    return response.data
  }
)

const sliceA = createSlice({
  name: 'compo',   //Reducer Name: state.compo  -> stote={reducer:{compo: importedName}}
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