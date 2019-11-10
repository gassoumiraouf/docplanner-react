import React, { Component } from 'react';
import City from './city'
const country =[{
    image:'https://www.docplanner.com/images/warsaw.png',
    name:'Warsaw'
},
{
    image:'https://www.docplanner.com/images/barcelona.png',
    name:'Barcelona'
},
{
    image:'https://www.docplanner.com/images/istanbul.png',
    name:'Istanbul'
},
{
image:'https://www.docplanner.com/images/rome.png',
name:'Rome'
},
{
image:'https://www.docplanner.com/images/mexico-city.png',
name:'Mexico city'
},
{
image:'https://www.docplanner.com/images/curitiba.png',
name:'Curitiba'
}
]
class Catalogue extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className='cities'>
        <div className='container'>
            {country.map((el,index)=><City item={el} key={index}/>)}
        </div> </div>);
    }
}
 
export default Catalogue;