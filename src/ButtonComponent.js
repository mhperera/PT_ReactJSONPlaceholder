import React from 'react'

const ButtonComponent = ({item, handleClick, requestType}) => {
  return (
    <button
        type='button'
        className= { requestType===item.type ? 'btn selected' : 'btn'}
        onClick={()=>{ handleClick(item.type) }}
    > { item.type } </button>
  )
}

export default ButtonComponent