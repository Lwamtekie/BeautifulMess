import React from 'react';
import './LogOut.scss';
import Beautiful from './Image/Beautiful.png';

class LogOut extends React.Component {
  render() {
    return (

        <div className="LOgOut">
         <div className="jumbotron text-center col-mid-6">
              <img src={Beautiful} className="logout-img" alt="..."/>
              </div>
        </div>

    );
  }
}
export default LogOut;
