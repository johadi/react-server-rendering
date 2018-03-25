import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import store from '../shared/store/store';
import { updateUserAction } from './actions/userAction';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {userDetails: null, error: null};
    this.handleGetState = this.handleGetState.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    // If we were not using react-redux
    // this.unsubscribe = store.subscribe(this.handleGetState);
  }
  componentWillUnmount(){
    // If we were not using react-redux, we have to unsubscribe
    // this.unsubscribe();
  }
  handleClick() {
    // const action = {
    //   type: 'UPDATE_USER',
    //   payload: {
    //     name: 'Jimoh Hadi',
    //     age: 33
    //   }
    // };
    // store.dispatch(action);
    // this.props.updateUser({
    //   name: 'Aliyu Abdul',
    //   age: 30,
    //   lga: 'Kano'
    // });
    this.props.updateUser({name: 'Aremu', age: 8});
  }
  handleGetState () {
    // console.log('Current States', store.getState());
    // console.log('User Details', this.props.user);
    console.log('User Details', store.getState());
  };

  render(){
    return (
      <div>
        <h2>Welcome to the App Home</h2>
        <button onClick={this.handleClick}>Update User</button><br/>
        <button onClick={this.handleGetState}>Get State</button><br/>
        <Link to={"/user"} >Visit Dashboard |</Link>
        <Link to={"/user/5"} >Visit User 5 |</Link>
        <Link to={"/places"} >Visit Places</Link>
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
  // return {
  //   updateUser: (userDetails) => {
  //     dispatch({
  //       type: 'UPDATE_USER',
  //       payload: userDetails
  //     });
  //   },
  //
  //   updateUserByAction: (userDetails) => {
  //     dispatch(updateUserAction(userDetails));
  //   }
  // }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
