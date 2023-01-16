import { Component } from "react";
import "./search-box.style.css";
class SearchBox extends Component {
  render() {
    const { className, placeholder, onChangeHandler } = this.props;
    return (
      <div className="search">
        <input
          type="search"
          className={className}
          placeholder={placeholder}
          onChange={onChangeHandler}
        />
      </div>
    );
  }
}
export default SearchBox;
