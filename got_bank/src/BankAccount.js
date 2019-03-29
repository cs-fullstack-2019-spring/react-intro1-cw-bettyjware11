import React, { Component } from 'react';
import CustomerName from "./CustomerName";
import Balance from "./Balance";

//Create a React component called BankAccount that accepts customerName and balance
class BankAccount extends Component{
    render(){
        return(
            <div>
                <CustomerName name={"Betty"}/>
                <Balance balance={1000}/>
            </div>

        );
    }
}

export default BankAccount;