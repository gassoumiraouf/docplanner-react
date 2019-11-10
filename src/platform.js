
import React, { Component } from 'react';
import SmallCard from './smallCard';


const showOffTab=[
    {image:'https://www.docplanner.com/img/flag.png',
    title:'Leader in 10 countries',
    description: 'Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile'
 },
    {image:'https://www.docplanner.com/img/visits.png',
    title:'1.5 million appointments',
    description:'booked last month'

    },
    {image:'https://www.docplanner.com/img/patients.png',
    title:'30 million unique patients',
    description:'visit us every month'

    },
    {image:'https://www.docplanner.com/img/doctors.png',
    title:'2 million active doctors',
    description:'trust in our solutions'

    }
]
class Platform extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div className="healthcare">
            <div className="container">
            <div className='leftContainer'>
                <h1 style={{color:'#00bfa5'}}>trust in our solutions</h1>
                <p>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
            </div>
            <div className='rightContainer '>
                {showOffTab.map((el,index)=><SmallCard item={el} key={index}/>)}
            </div>
            </div>
        </div> );
    }
}
 
export default Platform;