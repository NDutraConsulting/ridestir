import { Component } from "react";

// Gets applied to all elements in the application
import './styles/styles.css';


// There is a way to keep styles linked to the component in a different project

class SearchBox extends Component {
    
    render() {
        const {onChangeHandler, placeholder, className} = this.props;

        return (
            <input 
            className={`search-box ${className}`}
            type='search' 
            placeholder={placeholder}
            onChange={onChangeHandler}
            />
        );
    }
}

export default SearchBox;