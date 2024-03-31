import React from 'react'

function Transaction(props) {
  return (
    <li className='plus'>
        {props.transaction.description}
        <p>{props.transaction.amount}</p>
        <button className='delete-btn'>-</button>
    </li>
  )
}

export default Transaction