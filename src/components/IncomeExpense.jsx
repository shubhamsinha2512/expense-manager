import React from 'react'
import { useSelector } from 'react-redux'
import Balance from './Balance';

function IncomeExpense() {
  const transactions = useSelector(state => state.transactions) || [];
  const income = transactions.filter(transaction => transaction.type === "CREDIT").reduce((accumulator, transaction) => accumulator += transaction.amount, 0);
  const expense = transactions.filter(transaction => transaction.type === "DEBIT").reduce((accumulator, transaction) => accumulator += transaction.amount, 0);
  const balance = Math.abs(income) - Math.abs(expense);

  return (
    <>
      <Balance balance={balance} />
      <div className='inc-exp-container'>
        <div className='money plus'>
          <h4>Income</h4>
          <p>${income}</p>
        </div>
        <div className='money minus'>
          <h4>Expense</h4>
          <p>${expense}</p>
        </div>
      </div>
    </>
  )
}

export default IncomeExpense