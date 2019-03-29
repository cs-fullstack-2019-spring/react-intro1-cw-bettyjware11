import React, { Component } from 'react';

//customer name property
class CustomerName extends Component{
    render(){
        return(
            <div>
                <h2>Welcome {this.props.name}</h2>

            </div>

        );
    }
}

export default CustomerName;