import React from 'react';

function TableHeading({ heading }) {
  return (
    <tr>
      <th colSpan="2">{heading}</th>
    </tr>
  );
}

export default TableHeading;
