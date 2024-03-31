import { createSlice } from "@reduxjs/toolkit"

export const transactionSlice = createSlice({
    name: "transaction",
    initialState: [],
    reducers: {
        addTransaction: ((state, action) => {
            state = [action.payload, ...state];
            return state;
        }),
        deleteTransaction: ((state, action) => {
            state = state.filter(transaction => transaction.id !== action.payload.id);
            return state;
        })
    }
})

export const { addTransaction, deleteTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;