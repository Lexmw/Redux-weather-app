import React from "react";

export default class SearchHistory extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { history } = this.props;
    return (
      <div>
        <div className="card border-info mb-3">
          <div className="card-header text-white bg-info">Search History</div>
             <div className="card-body">
               <ul className='list-group'>
               {
                        history.map(SearchItem => (
                          <li className='list-group-item' key={SearchItem.time}>
                            {SearchItem.searchedCity},
                            {SearchItem.date},
                            {SearchItem.time}
                          </li>
                        ))
                      }
               </ul>
                {/* <table className='tbale table-md table-hover'>
                    <tbody>
                      {
                        history.map(SearchItem => (
                          <tr>
                            <th scope="row" key={SearchItem.time}>{SearchItem.searchedCity}</th>
                            <td>{SearchItem.date}</td>
                            <td>{SearchItem.time}</td>
                          </tr>
                        ))
                      }
                    </tbody>
                </table> */}
             </div>
          </div>
        </div>
    
    );
  }
}
