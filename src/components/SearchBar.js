import React, {Component} from 'react';

class SearchBar extends Component {
    
    onInputChange = e => {
        const term = e.target.value;
        this.props.onTermChange(term);
    }

    render() {
        return (
            <div className="search">
                <input placeholder="Enter text to search for gifs!" onChange={this.onInputChange} />
            </div>
        );
    }
}

export default SearchBar;