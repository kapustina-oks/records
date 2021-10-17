//import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './components/app/';

//import App from './App';

/* class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 26
        }
    }

    render() {
        const {name, surname, link} = this.props;
        const {years} = this.state;
        return(
            <>
            <h1>my name is {name}, surname - {surname}, years - {years}</h1>
            <a href={link}>my profile</a>
            </>
        )
    }
}

const Count = () => {
    return (
        <>
            <WhoAmI name="oksana" surname="kapustina" link="facebook.com"/>
            <WhoAmI name="ANNA" surname="kapustina" link="facebook.com"/>
            <WhoAmI name="Denis" surname="kapustina" link="facebook.com"/>
        </>
    )
}
 */
ReactDOM.render(<App/>, document.getElementById('root')); 


