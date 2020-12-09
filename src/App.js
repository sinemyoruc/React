import { Component } from "react";
import './App.css';
import AddUser from "./components/AddUser";
import Users from "./components/Users";


class App extends Component{

    constructor(props) {
      super(props);
      this.state = {
        users: [
          {
            id: 1,
            name: "Sinem",
            email: "sinemsinem"
          },
          {
            id: 2,
            name: "a",
            email: "aa"
          },
          {
            id: 3,
            name: "b",
            email: "bb"
          }
        ]
      };

      this.deleteUser = this.deleteUser.bind(this);
      this.addUser = this.addUser.bind(this);
  }
  addUser(newUser){
    let updatedUsers = this.state.users;
    updatedUsers.push(newUser);
    this.setState({
      users: updatedUsers
    });
  }
  deleteUser(id){
    let updatedUsers = this.state.users;

    updatedUsers = updatedUsers.filter(user => user.id !== id);
    //State Direct Immutable
    this.setState({
      users: updatedUsers
    })
  }
  render(){
    return (
      <div className="container">
        <h4>User App</h4>
        <hr />
        <AddUser addUser = {this.addUser}/>
        <hr />
        <Users deleteUser = {this.deleteUser} users = {this.state.users}/>
      </div>
    );
  }
 
}

export default App;
