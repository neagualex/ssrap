import React from 'react';
import PropTypes from 'prop-types';
import TableRow from './TableRow';

const CryptoTable = ({coins}) => (
    <div>
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Market Cap</th>
                <th>Price</th>
                <th>Volume</th>
                <th>Circulating Supply</th>
                <th>Change</th>
                <th>Favorite</th>
            </tr>
            </thead>
            <tbody>
            {coins.map((entry) => <TableRow key={entry.id}
                                            {...entry}/>
            )}
            </tbody>
        </table>
    </div>
);

CryptoTable.defaultProps = {
    coins: [],
};

CryptoTable.propTypes = {
    coins: PropTypes.array,
};

export default CryptoTable;