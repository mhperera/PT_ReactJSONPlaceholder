import React from 'react'

const ListItemComponent = ({ item }) => {
  return (
    <li
        className='list-item'
    > { JSON.stringify(item) } </li>
  )
}

export default ListItemComponent