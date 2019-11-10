import React from 'react';

const Intro = () =>{ 
    return <div>
        <div className="d-flex justify-content-around">
            <img src ='https://www.docplanner.com/img/sygnet.png' alt='logo'></img> </div>
            <div className='d-flex justify-content-around intro-title'>
                <p><h1 style={{color:'#00ccb1'}}>Making the healthcare experience more human</h1></p>
            </div>
            <div className="d-flex justify-content-around">
                <p className='intro-para'>We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.</p>
                <p className='intro-para'>We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.</p>
            </div>
       
    </div>
}
export default Intro;