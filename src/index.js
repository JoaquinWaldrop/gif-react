/*import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import request from 'superagent';
import registerServiceWorker from './registerServiceWorker';
import SearchBar from './components/SearchBar';
import GifModal from './components/GifModal';
import GifList from './components/GifList';
import './styles/app.css';

class App extends Component {

    state = {
        gifs: [],
        selectedGif: null,
        modalIsOpen: false
    }

    openModal = gif => {
        this.setState({
            modalIsOpen: true,
            selectedGif: gif
        });
    }

    closeModal = () => {
        this.setState({
            modalIsOpen: false,
            selectedGif: null
        });
    }

    handlerTermChange = (term) => {
        const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC`;

        request.get(url, (err, res) => {
            this.setState({ gifs: res.body.data });
        });
    }
 
    render() {
        return (
            <div>
                <SearchBar onTermChange={this.handlerTermChange}/>
                <GifList gifs={this.state.gifs} onGifSelect={this.openModal}/>
                <GifModal modalIsOpen={this.state.modalIsOpen}
                          selectedGif={this.state.selectedGif}
                          onRequestClose={this.closeModal} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);