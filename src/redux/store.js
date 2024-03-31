import { configureStore } from "@reduxjs/toolkit";
import transactionSlice from "./reducers/transactionSlice";


export default configureStore({
    reducer: {
        transactions: transactionSlice
    }
});