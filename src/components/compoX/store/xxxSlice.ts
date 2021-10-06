import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

interface Response {
  "id": number,
  "name"?: string,
  "director"?: string,
  "rating"?: number,
}

export const getDataByKey = createAsyncThunk<Response, { key: string }>(
  'xxx/fetchByKey',
  async ({ key }, { signal }) => {
    const source = axios.CancelToken.source()
    signal.addEventListener('abort', () => { source.cancel() })
    const response = await axios.get(
      `http://localhost:3000/${key}`, { cancelToken: source.token, }
    )
    return response.data
  }
)

const xxxSlice = createSlice({
  name: 'xxx',
  initialState: { objData: {}, loading: 'idle' },
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

export const selectXxx = (state: any) => state.xxx.objData; //name はここに

export default xxxSlice.reducer;