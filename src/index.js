import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// const App = () => {

//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         (err) => console.log(err)
//     );

//     return <div>Latitude: </div>
// };

class App extends React.Component {
    // constructor(props) {
    //     super(props);

    //     this.state = { lat: null, errorMessage: '' };
    // }

    // This is equivalent to the constructor
    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lat: position.coords.latitude });
            },
            (err) => {
                this.setState({ errorMessage: err.message });
            }
        );
    }

    render() {
        
        // return (
        //     <div>
        //         Latitude: {this.state.lat}
        //         <br />
        //         Error: {this.state.errorMessage}
        //     </div>);

        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
        }

        return <Spinner />
    }
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);