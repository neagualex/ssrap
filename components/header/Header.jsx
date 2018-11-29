import React from 'react';

class Header extends React.Component {
    render () {
        return (
            <div>
                <h1>CoinAlexCap</h1>
                <style jsx>{`
                    h1{
                        width: 100%;
                    }
                `}</style>
            </div>
        )
    }
}

export default Header