import React, { Component } from 'react';
class SmallCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {item}=this.props
        return ( <div className="card">
            <img src={item.image} alt='thing' />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
        </div> );
    }
}
 
export default SmallCard;