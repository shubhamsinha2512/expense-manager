import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuid } from "uuid";
import { addTransaction } from "../redux/reducers/transactionSlice"

function AddTransaction() {
    const dispatch = useDispatch();

    const [transaction, setTransaction] = useState({
        id: null,
        type: "",
        description: "",
        amount: 0
    })

    const handleChange = (e) => {
        e.preventDefault();
        setTransaction(prevTtansaction => {
            return {
                ...prevTtansaction,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (transaction.amount !== 0) {
            const transactionPayload = {
                ...transaction
            }

            transactionPayload.id = uuid();
            transactionPayload.type = transaction.amount > 0 ? "CREDIT" : "DEBIT";

            dispatch(addTransaction(transactionPayload));
        }
    }

    return (
        <>
            <h3>Add New Transaction</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor='text'>Description</label>
                    <input type='text' name='description' value={transaction.description} onChange={handleChange} placeholder='Enter Description' />
                </div>
                <div className="form-control">
                    <input type='number' name='amount' value={transaction.amount} onChange={handleChange} placeholder='Enter Amount' />
                </div>
                <button type='submit' className='add-transaction'>Add Transaction</button>
            </form>
        </>
    )
}

export default AddTransaction