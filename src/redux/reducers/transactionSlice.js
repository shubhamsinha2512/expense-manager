import { createSlice } from "@reduxjs/toolkit"

export const transactionSlice = createSlice({
    name: "transaction",
    initialState: [
        {
            id: '69310442-7047-4234-a685-ea76ab7764e5',
            type: 'CREDIT',
            description: 'ABC',
            amount: '100'
        }
    ],
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