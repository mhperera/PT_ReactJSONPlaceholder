import React from 'react'
import CellComponent from './CellComponent'

const TableRowComponent = ({ tablerow }) => {

  return (
    <tr className=''>
      {
        Object.entries(tablerow).map(([key, value])=>{

          return (
            <CellComponent
              key={key}
              value = {JSON.stringify(value)}
              className='list-item'
            />
          )

        })
      }
    </tr>
  )
}

export default TableRowComponent