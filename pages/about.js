import { connect } from 'react-redux';
import Page from '../components/page/page';

const page = (props) => {
    console.log(props);
    return (
        <div>
            <div>
                <h1>About Page</h1>
            </div>
        </div>
    );
};

export default Page(connect(state=>state)(page));