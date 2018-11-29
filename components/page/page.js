import React, {Fragment} from 'react';
import {Provider} from 'react-redux';
import store from '../../universal/store/store';
import DevTools from '../../universal/utils/DevTools';
import Header from '../../components/header/Header';

const page = (Page) => {
    return (
        class PageWrapper extends React.Component {
            render() {
                return (
                    <Fragment>
                        <Header />
                        <DevTools store={store} />
                        <Provider store={store}>
                            <Page />
                        </Provider>
                    </Fragment>
                )
            }
        }
    )
};

export default page;