import React, { Component } from 'react';
import CardItem from './cardItem';
const cardTab =[
    {title:'for patients',
    description:'Find a doctor, book a visit and solve any health-related doubt',
    image:'https://www.docplanner.com/img/screen-marketplace@2x.png',
    backColor:'#00ccb1',
    show:true
 },
 {title: 'for dotors',
 description:'Save time managing visits and cut no-shows by half',
 image:'https://www.docplanner.com/img/screen-saas@2x.png',
backColor:'#3d83df',
show:false}
]
class DocCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 

        return ( <div className='d-flex justify-content-around'>
            {cardTab.map((el,index)=><CardItem item={el}  key={index}/>)}
        </div> );
    }
}
 
export default DocCard;