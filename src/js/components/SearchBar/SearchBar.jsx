import React from "react";

import { 
    getWeather,
    SearchCity
 } from './SearchBarActions';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleGetWeather = this.handleGetWeather.bind(this);
    this.handleCityName = this.handleCityName.bind(this);
  }

  handleCityName(event) {
      const { dispatch } = this.props;
      const { value } = event.target

      dispatch(SearchCity(value));
  }

  handleGetWeather(event){
      event.preventDefault();
      const { dispatch, name } = this.props;
    
      dispatch(getWeather(name));
  }

  render() {
      const { name } = this.props;
    return (
      <div id='searchbar'>
        <form className="form ">
        <div className='row'>
            <div className='col-10'>
                <input
                className="form-control"
                type="text"
                placeholder="Search"
                aria-label="Search"
                value = { name }
                onChange={ this.handleCityName }
            />
            </div>
            <div className='col-2'>
                <button className="btn btn-unique btn-rounded btn-sm" 
                type="submit" 
                onClick={this.handleGetWeather}>
                Search
                </button>
            </div>
        </div>
        </form>
      </div>
    );
  }
}
