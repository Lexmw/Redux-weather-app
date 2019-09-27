import { connect } from 'react-redux';
import SearchBar from './SearchBar';


// this function takes the store and returns an object
// thats passed to the props of the component.
function mapStoreToProps(store) {
    return{
       name: store.search.name
    };
}
// this might look odd, but connect reuturns a function,
// that is then called witht he component itself


export default connect(mapStoreToProps)(SearchBar);