import React from 'react'
import TableRowComponent from './TableRowComponent';

const TableComponent = ({itemList}) => {
  return (

    <table className=''>
      <tbody>
          {
              itemList.map((tablerow)=>(
                  <TableRowComponent
                      key={tablerow.id}
                      tablerow={tablerow}
                  />
              ))
          }
        </tbody>
    </table>

  )
}

export default TableComponent
