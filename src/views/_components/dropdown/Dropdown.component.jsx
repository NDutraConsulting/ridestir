import { Component } from "react";

// Gets applied to all elements in the application
//import './search-box.styles.css';

// There is a way to keep styles linked to the component in a different project

class Dropdown extends Component {

    render() {
        const {onChangeHandler, className, name, options, defaultSelectedId} = this.props;



        return (
            <select className={className} 
                    name={name} 
                    id={name} 
                    value={defaultSelectedId}
                    onChange={onChangeHandler}>
                {options.map((option) => {
                    return (<option 
                                value={option.id} 
                                key={option.id}>
                                {option.name}
                            </option>);
                })}
            </select>
          );
    }
}

export default Dropdown;