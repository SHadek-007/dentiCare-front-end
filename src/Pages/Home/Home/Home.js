import React from 'react';
import Banner from '../Banner/Banner';
import DoctorIdentity from '../DoctorIdentity/DoctorIdentity';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <DoctorIdentity></DoctorIdentity>
        </div>
    );
};

export default Home;