import { Component } from "react";
import "./search-box.styles.css";

class SearchBox extends Component {
  render() {
    const { className, onChangeHandler, placeholder } = this.props;
    return (
      <div className="search--container">
        <input
          type="search"
          placeholder={placeholder}
          className={className}
          onChange={onChangeHandler}
        />
      </div>
    );
  }
}

export default SearchBox;
