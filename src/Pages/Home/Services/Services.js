import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("services.json")
        .then((res) => res.json())
        .then((data) => setServices(data));
  }, []);

    return (
        <div className='container'>
            <h2 className='text-center my-5'>My Service</h2>
            <div className='row row-cols-1 row-cols-md-4 g-3'>
            {
                services.map(service => <Service key={service.id} service={service}></Service>)
            }
            </div>
        </div>
    );
};

export default Services;