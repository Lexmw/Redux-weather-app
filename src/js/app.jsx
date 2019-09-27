import React from 'react';
import SearchBar from './components/SearchBar';
import SearchHistory from './components/SearchHistory';
import CityInfo from './components/CityInfo';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4 text-center">Weather Application</h1>
            <p className="lead text-center">Always Know if you'll need an umbrella!</p>
          </div>
          </div>

          <div id='searchbar'>
            <SearchBar/>
          </div>
          <br/>

          <div className='row' id='information'>
            <div className='col-12 col-md-6 mb-4'>
              <CityInfo/>
            </div>
            <div className='col-12 col-md-6 mb-4'>
              <SearchHistory/>
            </div>
          </div>
        </div>
    
    );
  }
}
