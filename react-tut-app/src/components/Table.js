import React from 'react';

import TableHeading from './TableHeading';
import TableRows from './TableRows';

class Table extends React.Component {
  constructor(props) {
    super(props);

    this.rows = this.rows.bind(this);
  }

  rows() {
    const groupRows = {
      sport: [<TableHeading heading="Sporting Goods" />],
      electronics: [<TableHeading heading="Electronics" />],
    };
    
    this.props.data.map(item => {
      if (item.category === 'Sporting Goods') {
        groupRows.sport = [...groupRows.sport, <TableRows data={item} key={item.name} />]
      } else {
        groupRows.electronics = [...groupRows.electronics, <TableRows data={item} key={item.name} />]
      }
      return false;
    });

    const grouped = [...groupRows.sport, ...groupRows.electronics];
    
    return grouped;
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            { this.rows() }            
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
