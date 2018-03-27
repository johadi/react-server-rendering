import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import {getUsersAction, updateUserAction} from './actions/userAction';
import axios from "axios/index";

class Home extends React.Component {
  static getUsers(store){
    return axios.get('http://localhost:3000/api/users')
      .then(response => {
        store.dispatch(getUsersAction(response.data));
      })
  }

  constructor(props) {
    super(props);
    this.state = {userDetails: null, error: null};
    this.handleGetState = this.handleGetState.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.updateUser({name: 'Aremu', age: 8});
  }
  handleGetState () {
    console.log('User Details', this.props.user);
  };

  render(){
    return (
      <div>
        <h2>Welcome to the App Home</h2>
        <button onClick={this.handleClick}>Update User</button><br/>
        <button onClick={this.handleGetState}>Get State</button><br/>
        <Link to={"/user"} >Visit Dashboard |</Link>
        <Link to={"/user/5"} >Visit User 5 |</Link>
        <Link to={"/profile"} >Visit Profile</Link>
        <ul>
          {this.props.user.users.map((user) => {
            return <li key={user.id}>{user.name}</li>
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userState
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({updateUser: updateUserAction}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
