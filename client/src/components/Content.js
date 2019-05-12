import React from 'react'

class Content extends React.Component{
    constructor(){
        super();
        this.state={
            customer:[]
        }
    }

    componentDidMount(){       
            fetch("/api/customer")
            .then(res =>{
                if(res.ok){
                    res.json()
                    .then(customer => {
                        this.setState({
                            customer: customer
                            })
                        })
                        } else {throw Error(`Request rejected with status ${res.status}`);}
                } )                
    }

    render(){
                const customers=this.state.customer.map(customer=>{
           
                    return(
                    <li key={customer.id}>{customer.firstname} {customer.lastname}</li>
                    )
                })
            
               
            
        return(
            
            <div className="container">
                <div>
                    <h1>Hello, Welcome to the test React App</h1>
                        {this.state.customer.length > 0 ? 
                    <ul>{customers}</ul> :
                    null}
                    
                </div>
            </div>
        )
    }
}

export default Content