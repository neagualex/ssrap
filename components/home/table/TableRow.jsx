import React from 'react';

const TableRow = ({name, mcap, price, volume, supply, change}) => (
    <tr>
        <td>{name}</td>
        <td>{mcap}</td>
        <td>{price}</td>
        <td>{volume}</td>
        <td>{supply}</td>
        <td>{change}</td>
        <td><input type='checkbox' /></td>
    </tr>
);

export default TableRow;