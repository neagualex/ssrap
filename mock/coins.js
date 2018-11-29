/*
    mock
 */

const coins = [
    {
        id: 1,
        name: 'Bitcoin',
        mcap: '$74,321,422,531',
        price: '$4,271.62',
        volume: '$6,978,281,935',
        supply: '17,398,875 BTC',
        change: '6.07%',
    },
    {
        id: 2,
        name: 'XRP',
        mcap: '$74,321,422,531',
        price: '$4,271.62',
        volume: '$6,978,281,935',
        supply: '17,398,875 BTC',
        change: '6.07%',
    },
    {
        id: 3,
        name: 'Ethereum',
        mcap: '$74,321,422,531',
        price: '$4,271.62',
        volume: '$6,978,281,935',
        supply: '17,398,875 BTC',
        change: '6.07%',
    },
    {
        id: 4,
        name: 'Bitcoin Cash',
        mcap: '$74,321,422,531',
        price: '$4,271.62',
        volume: '$6,978,281,935',
        supply: '17,398,875 BTC',
        change: '6.07%',
    },
    {
        id: 5,
        name: 'Stellar',
        mcap: '$74,321,422,531',
        price: '$4,271.62',
        volume: '$6,978,281,935',
        supply: '17,398,875 BTC',
        change: '6.07%',
    },
    {
        id: 6,
        name: 'EOS',
        mcap: '$74,321,422,531',
        price: '$4,271.62',
        volume: '$6,978,281,935',
        supply: '17,398,875 BTC',
        change: '6.07%',
    },
    {
        id: 7,
        name: 'Litecoin',
        mcap: '$74,321,422,531',
        price: '$4,271.62',
        volume: '$6,978,281,935',
        supply: '17,398,875 BTC',
        change: '6.07%',
    },
];

const getData = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        return resolve(coins)
    }, 1000);
});

module.exports={
    getData,
};