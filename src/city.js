import React, { Component } from 'react';
class City extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
       const {item}=this.props
        return (<div>
            <img src={item.image} alt='city'/>
            <div className='city-footer d-flex justify-content-around'>
                <h3>{item.name}</h3>
                <button type="button" class="btn btn-primary">See openings</button>
            </div>
        </div>  );
    }
}
 
export default City;