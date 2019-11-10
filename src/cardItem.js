import React, { Component } from 'react';
class CardItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {item}=this.props
        return ( <div className=' justify-content-around' style={{color:'white', width:'50%',backgroundColor:item.backColor}}>
             
            <p>{item.title}</p>
            <h1> {item.description}</h1>
            {item.show?<select>
  <option value="choose country">choose country</option>
  <option value="saab">tunisia</option>
  <option value="mercedes">Algeria</option>
  <option value="audi">Rakhmet</option>
</select>:<div></div>}
            <img src={item.image} alt='pc' style={{maxWidth: '50%',
    height: 'auto'}}></img>
    
            </div>)}
        ;
    }

export default CardItem