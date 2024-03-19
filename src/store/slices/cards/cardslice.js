import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const URL = 'https://api.magicthegathering.io/v1/cards';

export const fetchApi = createAsyncThunk('cards/fetchApi', async() => {
  const response = await axios.get(URL).catch((error) => console.log(error));
  const cardsData = response.data.cards;
  return cardsData;
});


export const cardSlice = createSlice({
  name: 'cards',
  initialState: {
    cards: [],
  },
  reducers: {
    setCardsList: (state, action) => {
    },
  },
});

export default cardSlice.reducer;
export const { setCardsList } = cardSlice.actions;