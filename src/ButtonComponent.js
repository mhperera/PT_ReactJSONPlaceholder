import React from 'react'

const ButtonComponent = ({item, handleClick}) => {
  return (
    <button
        type='button'
        className='btn'
        onClick={()=>{ handleClick(item.type) }}
    > { item.type } </button>
  )
}

export default ButtonComponent