import React from 'react';

function TableRows({ data }) {
  return (
    <tr>
      <td className={!data.stocked ? "red" : ""} >{data.name}</td>
      <td>{data.price}</td>
    </tr>
  );
}

export default TableRows;
