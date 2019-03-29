import React, { Component } from 'react';

//balance property
class Balance extends Component{
    render(){
        return(
            <div>
            <h3>Your account balance is $ {this.props.balance}</h3>
            </div>
        );
    }
}

export default Balance;