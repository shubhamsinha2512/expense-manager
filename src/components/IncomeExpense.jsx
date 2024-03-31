import React from 'react'

function IncomeExpense() {
  return (
    <div className='inc-exp-container'>
        <div>
            <h4>Income</h4>
            <p className='money plus'>$500</p>
        </div>
        <div className='money minus'>
            <h4>Expense</h4>
            <p>$500</p>
        </div>
    </div>
  )
}

export default IncomeExpense