import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class App extends Component {
    constructor() {
        super()
        this.state = {
            userName: '',
            email: '',
            password: '',
            cPassword: ''
        }

        // bind() is used to define states but if we use arrow function then we do not need that
        // // this.changeUserName = this.changeUserName.bind(this)
        // // this.changeEmail = this.changeEmail.bind(this)
        // // this.changePassword = this.changePassword.bind(this)
        // // this.changeCPassword = this.changeCPassword.bind(this)
        // // this.onSubmit = this.onSubmit.bind(this)

    }

    changeUserName = (event) => {
        this.setState({
            userName: event.target.value
        })
    }

    changeEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    changePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    changeCPassword = (event) => {
        this.setState({
            cPassword: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault()

        const registered = {
            userName: this.state.userName,
            email: this.state.email,
            password: this.state.password,
            cPassword: this.state.cPassword
        }

        axios.post('http://localhost:4000/app/signup', registered).then(response =>
            console.log(response.data));

        this.setState({
            userName: '',
            email: '',
            password: '',
            cPassword: ''
        })
    }
    
    updateRecords = (event) => {
        event.preventDefault()
        const registered1 = {
            user_Name: this.state.userName,
            email_Name: this.state.email,
            password_Name: this.state.password,
            cPassword_Name: this.state.cPassword
        }
        axios.put('http://localhost:4000/app/update/60ace9538f457031b418b07e', registered1).then(response =>
            console.log(response.data));

        this.setState({
            userName: '',
            email: '',
            password: '',
            cPassword: ''
        })
        console.log("updated");
    }

    deleteRecords = () => {
        axios.delete('http://localhost:4000/app/delete/60acbfbb4a01054298a9294e').then(response =>
            console.log(response.data));
        // document.write("updated");
    }

    // const updateUser = (id) =>
    // {
    //     const newAge = prompt("enter new age:");
    //     axios.update('http://localhost:4000/app/update', registered).then(response =>
    //         console.log(response.data));
    // }

    render() {
        return (<>
            <div className="container">
                <div className="form-div">
                    <form >
                        <input type="text"
                            placeholder="user name"
                            autoComplete="new-password"
                            onChange={this.changeUserName}
                            value={this.state.userName}
                            className="mt-4 form-control form-group" />

                        <input type="text"
                            placeholder="email"
                            autoComplete="new-password"
                            onChange={this.changeEmail}
                            value={this.state.email}
                            className="mt-3 form-control form-group" />

                        <input type="password"
                            placeholder="password"
                            autoComplete="new-password"
                            onChange={this.changePassword}
                            value={this.state.password}
                            className="mt-3 form-control form-group" />

                        <input type="password"
                            placeholder="confirm password"
                            autoComplete="new-password"
                            onChange={this.changeCPassword}
                            value={this.state.cPassword}
                            className="mt-3 form-control form-group" />

                        <input type='submit' className='btn btn-danger btn-block' value='submit' onClick={this.onSubmit} />
                        <input type='submit' className='m-4 btn btn-danger btn-block' value='update' onClick={this.updateRecords} />
                        <input type='submit' className='btn btn-danger btn-block' value='delete' onClick={this.deleteRecords} />
                    </form>
                </div>
            </div>

        </>
        );
    }
}
export default App;