import React from 'react';
import { Link } from 'react-router-dom';

export default class User extends React.Component {
  render(){
    const {id} = this.props.match.params;
    return (
      <div>
        {id ? <h2>Welcome {id}</h2> : ''}
        <h2>Welcome to the User Dashboard Page</h2>
        <Link to={"/"} >Visit Home |</Link>
        <Link to={"/user/10"} >Visit User 10 |</Link>
        <Link to={"/places"} >Visit Places</Link>
      </div>
    )
  }
}
