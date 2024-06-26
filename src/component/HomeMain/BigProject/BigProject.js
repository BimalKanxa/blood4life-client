import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import './BigProject.css'
import hospital from '../../../images/hospital-building-modern-parking-lot-59693686.jpg'


const BigProject = () => {
    const now = 20
    return (
        <div className='mx-3 mt-3 bigproject-container'>
              <h1 className='big-project text-white mt-5'>Our Big Project</h1>
            <div className='row'>
                <div className='col-lg-6 col-sm-12 mb-5'>
                <img src={hospital} class="img-fluid  image" alt="..."/>

                </div>
                <div className='col-lg-6 col-sm-12'>
                  
                    <h1 className='hospital'>Insure <strong className='hospital-string'>Hospital</strong> & <br/>
                         Save the Futures World </h1>
                         <p>
                             <strong className='hospital-text'>We need a lot of money to build this hospital. This hospital will provide free services to the poor people.Help us build this hospital.Please donate for build hospital  </strong>
                         </p>
                         <div className='goal'>
                             <p className='terget'>RAISED   <small className='money'>Rs 1000000</small></p>
                             <p className='terget'>GOAL  <small className='money'>Rs 5000000</small></p> 
                        </div>
                        <p> <ProgressBar now={now} label={`${now}%`} /></p>

                        <button className='donate-naw'>Donate Now</button>
                </div>

            </div>
            
        </div>
    );
};

export default BigProject;