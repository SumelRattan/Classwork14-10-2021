import React, {Component} from 'react';

class ApiFetch extends React.Component{
    constructor(props){
        super(props);
        this.state={
            items: [],
            isLoaded: false
        };
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=50')
        .then((res)=> res.json())
        .then(result=>{
            this.setState({
                isLoaded: true,
                items: result
            });
        });
    }
    render(){
        const {items, isLoaded, error1} = this.state;
        console.log(items);
        console.log(isLoaded);
        
        if(error1){
            return <div>Error: {error1.message}</div>
        }
        else if(!isLoaded){
            return <div>Loading......</div>
        }
        else{
            return (
                <ul>      
                    {items.map((item) => (
                        <li key={item.id}>
                            <h1>{item.title}</h1>
                            <img src={item.url} />
                        </li>
                    ))
                    }
                </ul>
            );
        }
    }
}
export default ApiFetch;