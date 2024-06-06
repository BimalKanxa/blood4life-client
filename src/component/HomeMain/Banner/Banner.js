import React from 'react';
import './Banner.css';
import banner2 from '../../../images/banner2.gif'
import { NavLink } from 'react-router-dom';


const Banner = () => {
    return (
        // Banner Section
        <div className='row mx-5 mt-3'>
            <div className="col-lg-6 col-sm-12 mt-5 ">
                <h1> <span className='text-danger'>Every drop counts</span> <br />
                    {/* <span className='text-danger'> Save Life</span> */}
                </h1>
                <p className='mt-4 text-light'>"Welcome to BLOOD-4Life, where every drop counts! Our mission is to connect generous donors with those in need, creating a network of life-saving support. Join us in giving the gift of life, one donation at a time. Together, we can make a difference and help ensure that vital blood supplies are always available for those who need them most. Join us today and be a part of this life-saving journey!"</p>
                <NavLink to='/donor'>
                    <button type="button" class="btn btn-outline-danger mt-2">Find Donor</button>
                </NavLink>
            </div>
            <div className="col-lg-6 col-sm-12 ">
                <img className='img-fluid mt-3' src={banner2} alt="" />
            </div>
        </div>
    );
};

export default Banner;