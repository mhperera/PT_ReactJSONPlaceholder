import React from 'react'
import ListItemComponent from './ListItemComponent';

export const List = ({itemList}) => {
  return (

    <ul className='list'>
        {
            itemList.map((item)=>(
                <ListItemComponent
                    key={item.id}
                    item={item}
                />
            ))
        }
    </ul>

  )
}
