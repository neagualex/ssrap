import React from 'react';
import {connect} from 'react-redux';
import Page from '../components/page/page';
import CryptoTable from '../components/home/table/CryptoTable';
import {getData} from '../mock/coins';

class page extends React.Component {

    state = {
        data: [],
    };

    componentDidMount() {
        getData().then((data) => {
            this.setState({data})
        }, error => {
            console.log(error);
        })
    };

    render() {
        const {data} = this.state;

        return (
            <div>
                <CryptoTable coins={data}/>
            </div>
        );
    }
}

export default Page(connect(state => state)(page));