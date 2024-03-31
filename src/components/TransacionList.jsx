import React from 'react'
import Transaction from './Transaction'
import { useSelector } from 'react-redux'

function TransacionList() {
    const transactions = useSelector(state => state.transactions) || [];
    console.log(transactions)

    return (
        <>
            <h2>Transactions</h2>
            <ul>{transactions && transactions?.map(transaction => <Transaction key={transaction.id} transaction={transaction} />)}</ul>
        </>
    )
}

export default TransacionList